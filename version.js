const CURRENT_VERSION = "1.4.3.1";
const VERSION_CHECK_URL = "patchnote.html";
const TRIAL_MODE_KEY = "trial_mode";

// バージョンチェックして新しければリロード＆バージョン表記も更新
function checkForUpdateAndSetVersion() {
  fetch(VERSION_CHECK_URL)
    .then(res => res.text())
    .then(html => {
      const match = html.match(/Ver([0-9.]+)/);
      if (match && match[1]) {
        // バージョン表記を更新
        const verElem = document.querySelector('a.ver');
        if (verElem) {
          verElem.textContent = "Ver" + match[1];
        }
        // バージョンが違えばリロード確認
        if (match[1] !== CURRENT_VERSION) {
          if (confirm("新しいバージョン（Ver" + match[1] + "）が公開されています。ページを更新しますか？")) {
            location.reload(true);
          }
        }
      }
    });
}

// 試験運用モード切り替え
function toggleTrialMode() {
  const nowTrial = localStorage.getItem(TRIAL_MODE_KEY) === "1";
  if (nowTrial) {
    localStorage.setItem(TRIAL_MODE_KEY, "0");
    alert("通常運用モードに戻しました。");
    location.reload();
  } else {
    localStorage.setItem(TRIAL_MODE_KEY, "1");
    alert("試験運用モードに切り替えました。");
    location.reload();
  }
}

// 試験運用バナー表示
function showTrialBanner() {
  if (localStorage.getItem(TRIAL_MODE_KEY) === "1") {
    const banner = document.createElement("div");
    banner.textContent = "【試験運用モード】";
    banner.style.cssText = "background:#ff9600;color:#fff;padding:8px 0;text-align:center;font-weight:bold;font-size:1.1em;";
    document.body.prepend(banner);
  }
}

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', function() {
  // ...既存の初期化処理...
  checkForUpdateAndSetVersion();
  showTrialBanner();

  // F12で試験運用モード切り替え
  document.addEventListener('keydown', function(e) {
    if (e.key === "F12") {
      toggleTrialMode();
    }
  });
});