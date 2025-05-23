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
document.addEventListener('DOMContentLoaded', function() {
  loadAndRenderTimetable();
  updateCountdown();
  setInterval(loadAndRenderTimetable, 3 * 60 * 1000);
  setInterval(updateCountdown, 60 * 60 * 1000);
});