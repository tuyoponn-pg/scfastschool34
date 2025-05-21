fetch('timetable.json')
  .then(response => response.json())
  .then(data => {
    const weekSelect = document.getElementById('weekSelect');
    const timetableDiv = document.getElementById('timetable');
    Object.keys(data).forEach(weekName => {
      const option = document.createElement('option');
      option.value = weekName;
      option.textContent = weekName;
      weekSelect.appendChild(option);
    });

    function renderTable(weekName) {
      const timetable = data[weekName];
      const days = ["月", "火", "水", "木", "金"];
      // 最大コマ数を取得
      const maxPeriods = Math.max(...days.map(day => (timetable[day] ? timetable[day].length : 0)));
      let html = '<table border="1"><tr>';
      // 曜日ヘッダー
      days.forEach(day => {
        html += `<th>${day}</th>`;
      });
      html += '</tr>';
      // 各コマごとに行を作成
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

    renderTable(weekSelect.value = Object.keys(data)[0]);
    weekSelect.addEventListener('change', () => {
      renderTable(weekSelect.value);
    });
  });