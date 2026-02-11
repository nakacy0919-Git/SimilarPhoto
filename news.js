// ============================================
// お知らせ設定 (news.js)
// ============================================

// ★ここに新しいお知らせを追加してください
const newsData = [
    { date: "2026.02.12", text: "検索機能をアップデート！英語の単語（例: apple, red）でも画像が見つかるようになりました。" },
   ];

// --------------------------------------------
// 以下は編集不要（表示用プログラム）
// --------------------------------------------
window.addEventListener('load', () => {
    const newsContainer = document.getElementById('news-list-container');
    // お知らせ表示エリアがないページでは何もしない
    if (!newsContainer) return;

    newsData.forEach(item => {
        const row = document.createElement('div');
        row.className = 'news-row';
        row.innerHTML = `
            <span class="news-date">${item.date}</span>
            <span class="news-text">${item.text}</span>
        `;
        newsContainer.appendChild(row);
    });
});