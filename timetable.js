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
      let html = '<table border="1"><tr><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th></tr>';
      for (let i = 0; i < timetable.length; i++) {
        html += '<tr>';
        for (let j = 0; j < timetable[i].length; j++) {
          html += `<td>${timetable[i][j]}</td>`;
        }
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