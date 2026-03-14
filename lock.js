// lock.js
const CORRECT_PASSWORD = "review9"; // ★ここにパスワードを設定

// sessionStorage を使って、同じタブ内なら1回の入力で済むようにする
if (sessionStorage.getItem('photoReviewUnlocked') !== 'true') {
    const userInput = prompt("パスワードを入力してください:");
    if (userInput === CORRECT_PASSWORD) {
        sessionStorage.setItem('photoReviewUnlocked', 'true');
    } else {
        alert("パスワードが違います。アクセスできません。");
        window.location.href = "about:blank";
    }
}