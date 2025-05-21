function loadAndRenderTimetable() {
  fetch('timetable.json')
    .then(response => response.json())
    .then(data => {
      const weekSelect = document.getElementById('weekSelect');
      const timetableDiv = document.getElementById('timetable');
      weekSelect.innerHTML = '';
      Object.keys(data).forEach(weekName => {
        const option = document.createElement('option');
        option.value = weekName;
        option.textContent = weekName;
        weekSelect.appendChild(option);
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
          days.forEach(day => {
            html += `<td>${(timetable[day] && timetable[day][period]) ? timetable[day][period] : ''}</td>`;
          });
          html += '</tr>';
        }
        html += '</table>';
        timetableDiv.innerHTML = html;
      }
      const selected = weekSelect.value || Object.keys(data)[0];
      renderTable(selected);
      weekSelect.value = selected;
      weekSelect.onchange = () => renderTable(weekSelect.value);
    });
}
function updateCountdown() {
  const gradDate = new Date('2026-06-13T00:00:00+09:00');
  const now = new Date();
  const diff = Math.ceil((gradDate - now) / (1000 * 60 * 60 * 24));
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