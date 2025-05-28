const CURRENT_VERSION = "1.4.3.6";
const VERSION_CHECK_URL = "version.json";
const TRIAL_MODE_KEY = "trial_mode";

// バージョンチェックして新しければリロード＆バージョン表記も更新
function checkForUpdateAndSetVersion() {
  fetch(VERSION_CHECK_URL)
    .then(res => res.json())
    .then(json => {
      const latestVersion = json.version;
      // バージョン表記を更新
      const verElem = document.querySelector('a.ver');
      if (verElem && latestVersion) {
        verElem.textContent = "Ver" + latestVersion;
      }
      // バージョンが違えばリロード確認
      if (latestVersion && latestVersion !== CURRENT_VERSION) {
        if (confirm("新しいバージョン（Ver" + latestVersion + "）が公開されています。ページを更新しますか？")) {
          location.reload(true);
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
  const old = document.getElementById("trial-banner");
  if (old) old.remove();
  if (localStorage.getItem(TRIAL_MODE_KEY) === "1") {
    const banner = document.createElement("div");
    banner.id = "trial-banner";
    banner.textContent = "【試験運用モード】";
    banner.style.cssText = "background:#ff9600;color:#fff;padding:8px 0;text-align:center;font-weight:bold;font-size:1.1em;";
    document.body.prepend(banner);
  }
}

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', function() {
  checkForUpdateAndSetVersion();
  showTrialBanner();
  // F12で試験運用モード切り替え
  document.addEventListener('keydown', function(e) {
    if (e.key === "F12") {
      toggleTrialMode();
    }
  });
  // 5秒ごとにバージョンチェック＆バナー表示を自動実行
  setInterval(() => {
    checkForUpdateAndSetVersion();
    showTrialBanner();
  }, 1000);
});