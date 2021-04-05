

  // let tableElement = [
  //   {r11: "Black Pantera", r12: 66, r13: 53},
  //   {r11: "Captain America", r12: 79, r13: 137},
  //   {r11: "Captain Marvel", r12: 97, r13: 26},
  //   {r11: "Hulk", r12: 5, r13: 49},
  //   {r11: "Iron Man", r12: 88, r13: 48},
  //   {r11: "Spider-Man", r12: 78, r13: 16},
  //   {r11: "Thanos", r12: 99, r13: 1000},
  //   {r11: "Thor", r12: 95, r13: 1000},
  //   {r11: "Yon-Rogg", r12: 73, r13: 52}
  // ];
  
  // let headerElement = ['Name', 'Strength', 'Age'];
  
  // let table = document.createElement('TABLE');
  // table.classList.add('table');
  // document.body.append(table);
  
  // let thead = document.createElement('THEAD');
  // thead.classList.add('tHead');
  // table.append(thead);
  
  // let tablebody = document.createElement('TBODY');
  // tablebody.classList.add('tBody');
  // table.append(tablebody);
  
  // let tr = document.createElement('TR');
  // thead.append(tr);

  // let th = document.createElement('TH');
  // th.classList.add('data-type');
  

  // for (let c = 0; c < headerElement.length; c++) {
  //   let th = document.createElement('TH');
  //   th.classList.add('data-type');
  //   th.insertAdjacentHTML("beforeend", headerElement[c]);
  //   th.setAttribute("id",`header${c}`);
  //   tr.append(th);
  // }
  // let renderCell = () => {
  //   tablebody.innerHTML = '';
  //   for (let i = 0; i < tableElement.length; i++) {
  //     let tr = document.createElement('tr');
  //     tablebody.append(tr);
  //     for (let j = 0; j < Object.keys(tableElement[0]).length; j++) {
  //       let td = document.createElement('td');
  //       td.insertAdjacentHTML(`beforeend`, Object.values(tableElement[i])[j]);
  //       tr.append(td);
  //     }
  //   }
  // }

  // renderCell();
  


// --------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
  const table = document.getElementById('sortMe');
  const headers = table.querySelectorAll('th');
  const tableBody = table.querySelector('tbody');
  const rows = tableBody.querySelectorAll('tr');

  // Track sort directions
  const directions = Array.from(headers).map(function(header) {
      return '';
  });

  // Transform the content of given cell in given column
  const transform = function(index, content) {
      // Get the data type of column
      const type = headers[index].getAttribute('data-type');
      switch (type) {
          case 'number':
              return parseFloat(content);
          case 'string':
          default:
              return content;
      }
  };

  const sortColumn = function(index) {
      // Get the current direction
      const direction = directions[index] || 'asc';

      // A factor based on the direction
      const multiplier = (direction === 'asc') ? 1 : -1;

      const newRows = Array.from(rows);

      newRows.sort(function(rowA, rowB) {
          const cellA = rowA.querySelectorAll('td')[index].innerHTML;
          const cellB = rowB.querySelectorAll('td')[index].innerHTML;

          const a = transform(index, cellA);
          const b = transform(index, cellB);    

          switch (true) {
              case a > b: return 1 * multiplier;
              case a < b: return -1 * multiplier;
              case a === b: return 0;
          }
      });

      // Remove old rows
      [].forEach.call(rows, function(row) {
          tableBody.removeChild(row);
      });

      // Reverse the direction
      directions[index] = direction === 'asc' ? 'desc' : 'asc';

      // Append new row
      newRows.forEach(function(newRow) {
          tableBody.appendChild(newRow);
      });
  };

  [].forEach.call(headers, function(header, index) {
      header.addEventListener('click', function() {
          sortColumn(index);
      });
  });
});
