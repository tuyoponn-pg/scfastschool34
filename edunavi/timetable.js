function showTodaysInfo() {
  const infoList = {
    "2025-05-28": "つどい",
    "2025-05-29": "心臓検査二次",
    "2025-05-30": "本日は金曜日だぁぁぁぁ!!!!!!!!!",
    "2025-06-03": "6限目は体育館で、しおり・筆記用具・体育館シューズを持参してください",
    "2025-06-04": "本日は修学旅行1日目です。また、登校時間は06:30ですご注意ください",
    "2025-06-05": "本日は修学旅行2日目です。あなたがこの文章を読んでいるということは、無断でスマホを持って行ったか、休んだかのどちらかですね。無断でスマホ持って行った人は、今すぐカバンにしまっておきましょう（見つからないように!）",
    "2025-06-06": "本日は修学旅行3日目です。お帰りなさい!しっかりと休んでくださいね",
    "2025-06-09": "6限には体育館で、しおりを持参してください  また、皆さんお待ちかねテスト期間です…頑張ってください!",
    "2025-06-16": "1学期期末考査1日目",
    "2025-06-17": "1学期期末考査2日目",
    "2025-06-18": "1学期期末考査3日目",
    "2025-06-19": "45分授業",
    "2025-06-20": "45分授業",
    "2025-06-21": "先週の時間割をミスで5組の時間割にしてしまいました。お詫び申し上げます。",
    "2025-06-22": "先週の時間割をミスで5組の時間割にしてしまいました。お詫び申し上げます。",
    "2025-06-23": "生徒会委員会",
    "2025-06-25": "つどい",
    "2025-06-27": "研究授業のため午前中の授業で昼食あり",
    "2025-06-30": "生徒会委員会で、二者面談の期間です。面談で色々なことを担任の先生と話してみましょう！",
    "2025-07-01": "二者面談の期間です。面談で色々なことを担任の先生と話してみましょう！",
    "2025-07-02": "二者面談の期間です。面談で色々なことを担任の先生と話してみましょう！",
    "2025-07-03": "二者面談の期間です。面談で色々なことを担任の先生と話してみましょう！",
    "2025-07-04": "5時間授業で、二者面談の期間です。面談で色々なことを担任の先生と話してみましょう！",
  };
  const now = new Date();
  const todayStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const infoBox = document.getElementById('todays-info');
  const message = infoList[todayStr] || "本日のお知らせはありません。";
  if (infoBox) {
    // スクロール用のラッパーを作成
    infoBox.innerHTML = `<div id="scroll-inner" style="white-space:nowrap;display:inline-block;">${message}</div>`;
    setupAutoScroll(infoBox);
  }
}
// 自動スクロール処理
function setupAutoScroll(infoBox) {
  const inner = infoBox.querySelector('#scroll-inner');
  if (!inner) return;
  // スタイル調整
  infoBox.style.overflow = "hidden";
  infoBox.style.whiteSpace = "nowrap";
  infoBox.style.position = "relative";
  infoBox.style.display = "block";
  infoBox.style.height = "0.5em";
  infoBox.style.lineHeight = "2.2em";
  inner.style.position = "absolute";
  inner.style.left = "0";
  inner.style.top = "0";
  // スクロール設定
  let pos = 0;
  let reqId = null;
  let scrollSpeed = 2;
  let pauseTime = 5000;
  let state = "scrolling";
  function scroll() {
    const boxWidth = infoBox.offsetWidth;
    const textWidth = inner.offsetWidth;
    // スクロール
    pos -= scrollSpeed;
    inner.style.left = pos + "px";
    // 最後まで行ったら右から再登場
    if (pos <= -textWidth) {
      pos = boxWidth;
      inner.style.left = pos + "px";
      state = "resetPause";
    }
    // 右から再登場して最初の位置に戻ったら一時停止
    if (state === "resetPause" && pos <= 0) {
      pos = 0;
      inner.style.left = "0px";
      state = "startPause";
      setTimeout(() => {
        state = "scrolling";
        reqId = requestAnimationFrame(scroll);
      }, pauseTime);
      return;
    }
    // 一時停止中は何もしない
    if (state === "startPause") {
      return;
    }
    reqId = requestAnimationFrame(scroll);
  }
  // リセット（同じ日で再呼び出し時のため）
  if (infoBox._scrollReqId) {
    cancelAnimationFrame(infoBox._scrollReqId);
  }
  pos = 0;
  inner.style.left = "0px";
  state = "scrolling";
  reqId = requestAnimationFrame(scroll);
  infoBox._scrollReqId = reqId;
}
function loadAndRenderTimetable() {
  fetch('timetable.json')
    .then(response => response.json())
    .then(data => {
      const weekSelect = document.getElementById('weekSelect');
      const timetableDiv = document.getElementById('timetable');
      weekSelect.innerHTML = '';
      const now = new Date();
      const todayStr = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')}`;
      let initialWeek = Object.keys(data)[0];
      Object.keys(data).forEach(weekName => {
        const option = document.createElement('option');
        option.value = weekName;
        option.textContent = weekName;
        weekSelect.appendChild(option);
        const match = weekName.match(/(\d{2})\/(\d{2})～(\d{2})\/(\d{2})/);
        if (match) {
          const year = now.getFullYear();
          const start = new Date(year, parseInt(match[1], 10) - 1, parseInt(match[2], 10));
          const end = new Date(year, parseInt(match[3], 10) - 1, parseInt(match[4], 10));
          end.setDate(end.getDate() + 1);
          if (now >= start && now < end) {
            initialWeek = weekName;
          }
        }
      });
      function renderTable(weekName) {
        const timetable = data[weekName];
        const days = ["月", "火", "水", "木", "金"];
        const maxPeriods = Math.max(...days.map(day => (timetable[day] ? timetable[day].length : 0)));
        let html = '<table border="1"><tr>';
        days.forEach(day => {
          html += `<th class="day-${day}">${day}</th>`;
        });
        html += '</tr>';
        for (let period = 0; period < maxPeriods; period++) {
          html += '<tr>';
          days.forEach((day, i) => {
            const isToday = i === (now.getDay() - 1) && weekName === initialWeek;
            html += `<td${isToday && timetable[day][period] ? ' style="background:#ff4d4d;font-weight:bold;"' : ''}>${(timetable[day] && timetable[day][period]) ? timetable[day][period] : ''}</td>`;
          });
          html += '</tr>';
        }
        html += '</table>';
        timetableDiv.innerHTML = html;
      }
      renderTable(initialWeek);
      weekSelect.value = initialWeek;
      weekSelect.onchange = () => renderTable(weekSelect.value);
    });
}
function updateCountdown() {
  const gradDate = new Date(2026, 2, 13);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diff = Math.ceil((gradDate - today) / (1000 * 60 * 60 * 24));
  const countdownElem = document.getElementById('countdown');
  if (countdownElem) {
    countdownElem.textContent = diff > 0 ? diff : 0;
  }
}
let lastDateStr = null;
function getTodayStr() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}
function checkDateAndUpdateAll() {
  const currentDateStr = getTodayStr();
  if (lastDateStr !== currentDateStr) {
    lastDateStr = currentDateStr;
    loadAndRenderTimetable();
    updateCountdown();
    showTodaysInfo();
  }
}
document.addEventListener('DOMContentLoaded', function() {
  lastDateStr = getTodayStr();
  loadAndRenderTimetable();
  updateCountdown();
  showTodaysInfo();
  setInterval(checkDateAndUpdateAll, 5 * 1000);
});