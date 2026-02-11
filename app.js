// ★重要: Helper Function to extract filename number
function getFileNum(path) {
    if (!path) return "";
    const fileName = path.split('/').pop(); 
    const match = fileName.match(/(\d+)/);
    // CNN001 -> 001, 001.webp -> 001, apple.jpg -> apple
    return match ? match[1] : fileName.split('.')[0];
}

// === System Variables ===
let currentMode = null; 
let currentLang = 'en';
let currentCategoryIndex = 0;
let quizPool = [], wordBank = [];

let currentQuiz = null;
let quizTimer = null;
let quizQueue = [];
let quizIndex = 0;
let quizScore = 0;

let imgQuizQueue = []; 
let imgQuizIndex = 0;
let imgQuizScore = 0;
let currentImgQuiz = null;
let imgTimer = null;

const UI_TEXT = {
    en: { showFrame: "Show Frames", hideFrame: "Hide Frames", vocab: "Vocabulary", idioms: "Idioms", synonyms: "Synonyms", grammar: "Grammar", aboutBtn: "ⓘ About This Method", searchPlaceholder: "検索したい番号を入力 (複数可: 123, 456)", searchBtn: "Search", noResult: "No matching image found." },
    jp: { showFrame: "枠を表示", hideFrame: "枠を隠す", vocab: "単語", idioms: "熟語", synonyms: "類義語", grammar: "文法", aboutBtn: "ⓘ このメソッドについて", searchPlaceholder: "番号を入力 (例: 123, 456)", searchBtn: "検索", noResult: "該当する画像が見つかりません。" }
};

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playSound(type) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    if (type === 'correct') {
        osc.type = 'sine'; osc.frequency.setValueAtTime(660, audioCtx.currentTime); osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime); gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.4);
        osc.start(); osc.stop(audioCtx.currentTime + 0.4);
    } else {
        osc.type = 'sawtooth'; osc.frequency.setValueAtTime(150, audioCtx.currentTime); osc.frequency.linearRampToValueAtTime(100, audioCtx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime); gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.3);
        osc.start(); osc.stop(audioCtx.currentTime + 0.3);
    }
}

// ============================================
// ★ Dynamic Background Initialization
// ============================================
function initDynamicBackground() {
    const container = document.getElementById('dynamic-bg-container');
    if (!window.galleryData || window.galleryData.length === 0) return;

    // ランダムに画像をシャッフルして、最初の60枚くらいを使う
    const shuffled = [...window.galleryData].sort(() => 0.5 - Math.random());
    const selectedImages = shuffled.slice(0, 60);

    selectedImages.forEach(item => {
        const img = document.createElement('img');
        img.src = item.imageFile;
        img.className = 'bg-grid-item';
        img.alt = "";
        container.appendChild(img);
    });
}

// Call initialization on load
window.addEventListener('load', () => {
    initDynamicBackground();
});

// ============================================
// 1. App Start
// ============================================
function startApp(mode) {
    currentMode = mode;
    const modeScreen = document.getElementById('mode-screen');
    modeScreen.classList.add('fade-out');

    setTimeout(() => {
        modeScreen.style.display = 'none';
        const appContent = document.getElementById('app-content');
        appContent.style.display = 'flex';
        setTimeout(() => { appContent.classList.remove('fade-out'); }, 50);
        document.getElementById('btn-home').style.display = 'block';

        document.getElementById('search-section').style.display = 'none';
        document.getElementById('gallery-list').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'none';
        document.getElementById('image-quiz-container').style.display = 'none';
        document.getElementById('review-cat-tabs').style.display = 'none';
        document.getElementById('quiz-cat-screen').style.display = 'none';

        if(mode === 'review') {
            document.getElementById('search-section').style.display = 'flex';
            document.getElementById('gallery-list').style.display = 'grid';
            document.getElementById('review-cat-tabs').style.display = 'grid'; 
            selectCategory(0);
        } else if(mode === 'quiz-menu') {
            showQuizCategorySelection();
        } else if(mode === 'image-quiz') {
            document.getElementById('image-quiz-container').style.display = 'flex';
            initImageQuiz();
        }
    }, 400); 
}

function goHome() {
    currentMode = null;
    clearInterval(imgTimer);
    clearTimeout(quizTimer);
    const appContent = document.getElementById('app-content');
    appContent.classList.add('fade-out');
    document.getElementById('btn-home').style.display = 'none';

    setTimeout(() => {
        appContent.style.display = 'none';
        const modeScreen = document.getElementById('mode-screen');
        modeScreen.style.display = 'flex';
        setTimeout(() => { modeScreen.classList.remove('fade-out'); }, 50);
        document.getElementById('gallery-list').innerHTML = '';
        closeModalDirect();
    }, 400);
}

// ============================================
// 2. Quiz Category Selection
// ============================================
function showQuizCategorySelection() {
    const screen = document.getElementById('quiz-cat-screen');
    const existingTabs = screen.querySelector('.genre-tabs');
    if (existingTabs) existingTabs.remove();

    screen.style.display = 'flex';
    
    const cats = [0,1,2,3,4,5,6,7,8,9,10,'cnn'];
    const container = document.createElement('div');
    container.className = 'genre-tabs'; 
    
    cats.forEach(c => {
        const btn = document.createElement('button');
        btn.className = 'genre-btn';
        btn.textContent = (c === 'cnn') ? 'CNN' : (c * 100);
        btn.onclick = () => startQuizWithCategory(c);
        container.appendChild(btn);
    });
    screen.appendChild(container);
}

function startQuizWithCategory(cat) {
    currentCategoryIndex = cat;
    document.getElementById('quiz-cat-screen').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'flex';
    
    const list = window.galleryData.filter(item => {
        if (cat === 'cnn') return item.imageFile.toLowerCase().includes('cnn');
        const num = getFileNum(item.imageFile);
        if (isNaN(parseInt(num))) return false; 
        return Math.floor(parseInt(num) / 100) === parseInt(cat);
    });
    initQuiz(list);
}

// ============================================
// 3. Review Mode Logic
// ============================================
function normalizeInput(input) {
    let val = input.value;
    val = val.replace(/[０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0));
    val = val.replace(/[^0-9, ]/g, '');
    input.value = val;
}

function performSearch() {
    const inputVal = document.getElementById('img-search-input').value;
    if (!inputVal) return;
    const targetNums = inputVal.split(/[, ]+/).map(s => parseInt(s, 10)).filter(n => !isNaN(n));
    if (targetNums.length === 0) return;
    
    document.querySelectorAll('.genre-btn').forEach(btn => btn.classList.remove('active'));
    
    const list = window.galleryData.filter(item => {
        const num = parseInt(getFileNum(item.imageFile), 10);
        return targetNums.includes(num);
    });
    renderGalleryList(list);
}

function selectCategory(cat) {
    currentCategoryIndex = cat;
    if(document.getElementById('img-search-input')) document.getElementById('img-search-input').value = '';
    document.querySelectorAll('#review-cat-tabs .genre-btn').forEach(btn => {
        const onclickVal = btn.getAttribute('onclick');
        let btnArg = onclickVal.match(/selectCategory\(([^)]+)\)/)[1].replace(/['"]/g, '');
        if (!isNaN(btnArg)) btnArg = parseInt(btnArg, 10);
        if(btnArg === cat) btn.classList.add('active'); else btn.classList.remove('active');
    });

    const list = window.galleryData.filter(item => {
        if (cat === 'cnn') return item.imageFile.toLowerCase().includes('cnn');
        const num = parseInt(getFileNum(item.imageFile), 10);
        if(isNaN(num)) return false; 
        return Math.floor(num / 100) === cat;
    });
    list.sort((a, b) => {
        const getNum = s => parseInt(getFileNum(s.imageFile), 10) || 0;
        return getNum(a) - getNum(b);
    });
    renderGalleryList(list);
}

function renderGalleryList(list) {
    const container = document.getElementById('gallery-list');
    container.innerHTML = '';
    const txt = UI_TEXT[currentLang];
    if (list.length === 0) {
        container.style.display = 'block'; container.innerHTML = `<p style="text-align:center; color:#999; padding:40px;">${txt.noResult}</p>`;
        return;
    }
    container.style.display = 'grid';
    list.forEach((data) => {
        const fileNum = getFileNum(data.imageFile);
        const thumb = document.createElement('div');
        thumb.className = 'gallery-thumb';
        thumb.onclick = () => openLessonModal(data);
        thumb.innerHTML = `<div class="thumb-img-wrapper"><img src="${data.imageFile}" class="thumb-img" loading="lazy"></div><div class="thumb-info">No. ${fileNum}</div>`;
        container.appendChild(thumb);
    });
}

function openLessonModal(data) {
    const modal = document.getElementById('lesson-modal');
    const body = document.getElementById('modal-body');
    const txt = UI_TEXT[currentLang];
    const fileNum = getFileNum(data.imageFile);
    const cardID = `card-${fileNum}`;
    const article = document.createElement('article');
    article.className = 'photo-card';
    article.innerHTML = `
        <div class="card-header"><span class="card-number">No. ${fileNum}</span><button class="toggle-frame-btn" onclick="toggleLocalFrames('${cardID}', this)">${txt.showFrame}</button></div>
        <div class="image-wrapper" id="${cardID}-wrapper"><img src="${data.imageFile}" class="main-image" alt="Gallery Image"></div>
        <div class="desc-box" id="${cardID}-desc">
            <span class="desc-title">Title</span>
            <div class="eng-row"><div class="eng-text"></div><button class="speak-btn main-speak">🔊</button></div>
            <div class="jp-text"></div>
            <div class="learning-grid">
                <div class="learn-item"><h4>${txt.vocab} <button class="mini-speak-btn vocab-speak">🔊</button></h4><ul class="l-vocab"></ul></div>
                <div class="learn-item"><h4>${txt.idioms} <button class="mini-speak-btn idiom-speak">🔊</button></h4><ul class="l-idiom"></ul></div>
                <div class="learn-item"><h4>${txt.synonyms} <button class="mini-speak-btn synonym-speak">🔊</button></h4><ul class="l-synonym"></ul></div>
                <div class="learn-item"><h4>${txt.grammar}</h4><div class="l-grammar" style="font-size:0.9rem; color:#444;"></div></div>
            </div>
        </div>
    `;
    const wrapper = article.querySelector('.image-wrapper');
    if(data.spots) {
        data.spots.forEach(spot => {
            const div = document.createElement('div');
            div.className = 'hotspot';
            Object.assign(div.style, { top: spot.top, left: spot.left, width: spot.width, height: spot.height, borderColor: spot.color });
            div.onclick = (e) => { e.stopPropagation(); updateDescription(cardID, spot); };
            wrapper.appendChild(div);
        });
    }
    body.innerHTML = ''; body.appendChild(article); modal.style.display = 'flex';
}
function closeModal(e) { if (e.target.id === 'lesson-modal') closeModalDirect(); }
function closeModalDirect() { document.getElementById('lesson-modal').style.display = 'none'; document.getElementById('modal-body').innerHTML = ''; }
function toggleLocalFrames(cardID, btn) {
    const wrapper = document.getElementById(`${cardID}-wrapper`);
    const spots = wrapper.querySelectorAll('.hotspot');
    if (spots.length === 0) return;
    let isHidden = (spots[0].style.display === 'none' || spots[0].style.display === '');
    spots.forEach(s => s.style.display = isHidden ? 'block' : 'none');
    const txt = UI_TEXT[currentLang];
    btn.textContent = isHidden ? txt.hideFrame : txt.showFrame;
    btn.classList.toggle('active', isHidden);
    if(!isHidden) document.getElementById(`${cardID}-desc`).style.display = 'none'; 
}
function updateDescription(cardID, data) {
    const box = document.getElementById(`${cardID}-desc`);
    box.style.display = 'block'; box.style.borderTopColor = data.color;
    box.querySelector('.desc-title').textContent = data.title;
    box.querySelector('.desc-title').style.color = data.color;
    box.querySelector('.eng-text').textContent = data.eng;
    box.querySelector('.jp-text').textContent = data.jp;
    box.querySelector('.l-grammar').textContent = data.grammar || "";
    const fillList = (cls, items) => {
        const ul = box.querySelector(cls); ul.innerHTML = '';
        if(items) items.forEach(txt => { const li = document.createElement('li'); li.textContent = txt; ul.appendChild(li); });
    };
    fillList('.l-vocab', data.vocab); fillList('.l-idiom', data.idioms); fillList('.l-synonym', data.synonyms);
    const setupSpeak = (sel, txt) => {
        const btn = box.querySelector(sel); const newBtn = btn.cloneNode(true); btn.parentNode.replaceChild(newBtn, btn);
        if(txt && txt.length > 0) { newBtn.style.display = 'inline-block'; newBtn.onclick = () => speakText(txt); } else { newBtn.style.display = 'none'; }
    };
    const clean = (arr) => (!arr || arr.length===0)?"":arr.map(i=>i.replace(/\s*\(.*?\)/g,'')).join(", ");
    setupSpeak('.main-speak', data.eng); setupSpeak('.vocab-speak', clean(data.vocab));
    setupSpeak('.idiom-speak', clean(data.idioms)); setupSpeak('.synonym-speak', clean(data.synonyms));
}
function speakText(text) {
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = 'en-US'; speechSynthesis.speak(u);
    }
}
function toggleMethod() { document.getElementById('method-box').style.display = (document.getElementById('method-box').style.display === 'block') ? 'none' : 'block'; }
function handleEnter(e) { if(e.key === 'Enter') performSearch(); }
function cleanVocab(str) { return str.replace(/\s*\(.*?\)/g, '').trim(); }

// ============================================
// 5. Text Quiz Mode
// ============================================
function initQuiz(list) {
    // Prepare Word Bank from selected list
    wordBank = [];
    list.forEach(item => {
        if(item.spots) item.spots.forEach(s => {
            if (s.vocab && s.vocab.length > 0) { s.vocab.forEach(v => { const c = cleanVocab(v); if(c.length > 1) wordBank.push(c); }); }
        });
    });
    if (wordBank.length === 0) wordBank = ["apple", "pen", "this", "that"]; 
    
    // Create Queue
    let fullQueue = [];
    list.forEach(item => {
        if(item.spots) item.spots.forEach(spot => {
            const words = spot.eng.split(' ');
            let candidates = [];
            if (spot.vocab && spot.vocab.length > 0) {
                words.forEach((w, i) => {
                    const cleanW = w.toLowerCase().replace(/[.,?!"]/g, '');
                    const isMatch = spot.vocab.some(v => {
                        const cleanV = cleanVocab(v).toLowerCase(); 
                        if (cleanV.length < 2) return false;
                        if (cleanW === cleanV) return true;
                        if (cleanW.includes(cleanV)) return true;
                        return false;
                    });
                    if (isMatch) candidates.push(i);
                });
            }
            if(candidates.length > 0) {
                const targetIdx = candidates[Math.floor(Math.random() * candidates.length)];
                fullQueue.push({ img: item.imageFile, spot: spot, fullEng: spot.eng, words: words, ans: words[targetIdx].replace(/[.,?!"]/g, ''), idx: targetIdx });
            }
        });
    });
    
    if(fullQueue.length === 0) { alert("No valid data in this category."); return; }
    
    fullQueue.sort(() => Math.random() - 0.5);
    quizQueue = fullQueue.slice(0, 10);
    
    quizIndex = 0; quizScore = 0;
    document.getElementById('quiz-final-result').style.display = 'none';
    document.getElementById('quiz-main-area').style.display = 'block';
    nextQuiz();
}

function nextQuiz() {
    clearTimeout(quizTimer);
    if(quizIndex >= quizQueue.length) { showQuizResult(); return; }

    currentQuiz = quizQueue[quizIndex];
    quizIndex++;
    
    document.getElementById('quiz-progress').textContent = `Question ${quizIndex} / 10`;
    document.getElementById('q-controls').style.visibility = 'hidden';
    document.getElementById('q-options').innerHTML = '';
    document.getElementById('q-main-img').src = currentQuiz.img;
    document.getElementById('q-hint-box').style.display = 'none'; 
    
    document.getElementById('q-file-num').textContent = getFileNum(currentQuiz.img);

    const progressBar = document.getElementById('q-timer-progress');
    progressBar.style.transition = 'none'; progressBar.style.width = '100%';
    void progressBar.offsetWidth;
    progressBar.style.transition = 'width 15s linear';
    progressBar.style.width = '0%';
    
    let html = "";
    currentQuiz.words.forEach((w, i) => {
        if(i === currentQuiz.idx) { const p = w.match(/[.,?!"]/) ? w.match(/[.,?!"]/)[0] : ""; html += `<span class="blank">______</span>${p} `; }
        else html += w + " ";
    });
    document.getElementById('q-sentence').innerHTML = html;
    
    let choices = new Set([currentQuiz.ans]);
    let limit = 0;
    while(choices.size < 4 && limit < 100) {
        const w = wordBank[Math.floor(Math.random() * wordBank.length)];
        if(w && w.toLowerCase() !== currentQuiz.ans.toLowerCase()) choices.add(w);
        limit++;
    }
    Array.from(choices).sort(()=>Math.random()-0.5).forEach(choice => {
        const btn = document.createElement('button'); btn.className = 'option-btn'; btn.textContent = choice;
        btn.onclick = () => checkAns(btn, choice);
        document.getElementById('q-options').appendChild(btn);
    });
}

function checkAns(btn, val) {
    const correct = currentQuiz.ans;
    document.querySelectorAll('.option-btn').forEach(b => {
        b.style.pointerEvents = 'none';
        if(b.textContent.toLowerCase() === correct.toLowerCase()) b.classList.add('correct');
    });
    const msg = document.getElementById('q-result-msg');
    const blank = document.querySelector('.blank');
    
    if(val.toLowerCase() === correct.toLowerCase()) {
        quizScore++;
        playSound('correct'); confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#27ae60', '#2ecc71', '#f1c40f'] });
        msg.textContent = "Correct! 🎉"; msg.style.color = "#27ae60";
        blank.textContent = correct; blank.style.color = "#27ae60"; blank.style.borderBottom = "none";
    } else {
        playSound('wrong'); btn.classList.add('wrong'); msg.textContent = "Try again!"; msg.style.color = "#e74c3c";
    }
    document.getElementById('q-controls').style.visibility = 'visible';
    setTimeout(() => { document.getElementById('q-controls').scrollIntoView({ behavior: 'smooth', block: 'end' }); }, 300);
}

function showQuizResult() {
    document.getElementById('quiz-main-area').style.display = 'none';
    document.getElementById('quiz-final-result').style.display = 'block';
    document.getElementById('q-final-score').textContent = `${quizScore} / 10`;
    const commentDiv = document.getElementById('q-final-comment');
    if(quizScore === 10) commentDiv.textContent = "Perfect! Amazing! 🏆";
    else if(quizScore >= 8) commentDiv.textContent = "Great Job! 🌟";
    else if(quizScore >= 5) commentDiv.textContent = "Good! Keep it up! 👍";
    else commentDiv.textContent = "Don't give up! Try again! 💪";
}
function restartQuiz() { startQuizWithCategory(currentCategoryIndex); }
function toggleQuizHint() {
    const box = document.getElementById('q-hint-box');
    if(box.style.display === 'block') { box.style.display = 'none'; } 
    else {
        let html = '<ul>';
        if(currentQuiz.spot.vocab) { currentQuiz.spot.vocab.forEach(v => html += `<li>${v}</li>`); }
        html += '</ul>'; box.innerHTML = html; box.style.display = 'block';
    }
}

// ============================================
// 6. Image Quiz Mode
// ============================================
function initImageQuiz() {
    imgQuizQueue = [];
    window.galleryData.forEach(item => {
        if(item.spots) item.spots.forEach(spot => {
            imgQuizQueue.push({ correctImg: item.imageFile, eng: spot.eng, jp: spot.jp, spot: spot });
        });
    });
    if(imgQuizQueue.length < 4) { alert("Not enough data."); return; }
    imgQuizQueue.sort(() => Math.random() - 0.5);
    imgQuizQueue = imgQuizQueue.slice(0, 10);
    
    imgQuizIndex = 0; imgQuizScore = 0;
    document.getElementById('iq-final-result').style.display = 'none';
    document.getElementById('iq-text-phase').style.display = 'flex';
    nextImageQuiz();
}

function nextImageQuiz() {
    clearInterval(imgTimer);
    if(imgQuizIndex >= imgQuizQueue.length) { showImageQuizResult(); return; }

    currentImgQuiz = imgQuizQueue[imgQuizIndex];
    imgQuizIndex++;

    document.getElementById('iq-progress').textContent = `Question ${imgQuizIndex} / 10`;
    document.getElementById('iq-text-phase').style.display = 'flex';
    document.getElementById('iq-image-phase').style.display = 'none';
    document.getElementById('iq-controls').style.visibility = 'hidden';
    document.getElementById('iq-sentence').textContent = currentImgQuiz.eng;
    document.getElementById('iq-hint-box').style.display = 'none';
    
    const progressBar = document.getElementById('iq-timer-progress');
    progressBar.style.transition = 'none'; progressBar.style.width = '100%';
    void progressBar.offsetWidth;
    progressBar.style.transition = 'width 15s linear';
    progressBar.style.width = '0%';
    imgTimer = setTimeout(() => { skipTimer(); }, 15000);
}

function skipTimer() {
    clearInterval(imgTimer);
    document.getElementById('iq-text-phase').style.display = 'none';
    document.getElementById('iq-image-phase').style.display = 'grid';
    showImageSelection();
    setTimeout(() => { document.getElementById('iq-anchor').scrollIntoView({ behavior: 'smooth' }); }, 100);
}

function toggleImageQuizHint() {
    const box = document.getElementById('iq-hint-box');
    if(box.style.display === 'block') { box.style.display = 'none'; } 
    else {
        let html = '<ul>';
        if(currentImgQuiz.spot.vocab) { currentImgQuiz.spot.vocab.forEach(v => html += `<li>${v}</li>`); }
        html += '</ul>'; box.innerHTML = html; box.style.display = 'block';
    }
}

function showImageSelection() {
    const imgPhase = document.getElementById('iq-image-phase');
    imgPhase.innerHTML = '';
    let choices = [];
    choices.push({ img: currentImgQuiz.correctImg, isCorrect: true });
    let allImages = window.galleryData.map(d => d.imageFile).filter(img => img !== currentImgQuiz.correctImg);
    allImages = [...new Set(allImages)];
    allImages.sort(() => Math.random() - 0.5);
    for(let i=0; i<3; i++) { if(allImages[i]) choices.push({ img: allImages[i], isCorrect: false }); }
    choices.sort(() => Math.random() - 0.5);

    choices.forEach(choice => {
        const div = document.createElement('div');
        div.className = 'iq-img-card';
        div.onclick = (e) => checkImageAns(div, choice.isCorrect);
        const img = document.createElement('img'); img.src = choice.img;
        const match = choice.img.match(/(\d+)/);
        const num = match ? match[1] : "";
        const numBadge = document.createElement('div');
        numBadge.className = 'iq-file-num'; numBadge.textContent = num;
        div.appendChild(img); div.appendChild(numBadge);
        imgPhase.appendChild(div);
    });
}

function checkImageAns(div, isCorrect) {
    document.querySelectorAll('.iq-img-card').forEach(c => c.classList.add('disabled'));
    const msg = document.getElementById('iq-result-msg');
    const controls = document.getElementById('iq-controls');
    if(isCorrect) {
        imgQuizScore++;
        playSound('correct'); confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#27ae60', '#2ecc71', '#f1c40f'] });
        div.classList.add('correct'); msg.textContent = "Correct! 🎉"; msg.style.color = "#27ae60";
    } else {
        playSound('wrong'); div.classList.add('wrong'); msg.textContent = "Oops!"; msg.style.color = "#e74c3c";
        document.querySelectorAll('.iq-img-card').forEach(c => { if(c.querySelector('img').src.includes(currentImgQuiz.correctImg)) c.classList.add('correct'); });
    }
    controls.style.visibility = 'visible';
    setTimeout(() => { controls.scrollIntoView({ behavior: 'smooth', block: 'end' }); }, 300);
}

function showImageQuizResult() {
    document.getElementById('iq-text-phase').style.display = 'none';
    document.getElementById('iq-image-phase').style.display = 'none';
    document.getElementById('iq-controls').style.visibility = 'hidden';
    document.getElementById('iq-progress').textContent = "";
    const resultDiv = document.getElementById('iq-final-result');
    resultDiv.style.display = 'block';
    document.getElementById('iq-final-score').textContent = `${imgQuizScore} / 10`;
    const commentDiv = document.getElementById('iq-final-comment');
    if(imgQuizScore === 10) commentDiv.textContent = "Perfect! Amazing! 🏆";
    else if(imgQuizScore >= 8) commentDiv.textContent = "Great Job! 🌟";
    else if(imgQuizScore >= 5) commentDiv.textContent = "Good! Keep it up! 👍";
    else commentDiv.textContent = "Don't give up! Try again! 💪";
}
function restartImageQuiz() { initImageQuiz(); }