let input = document.getElementById('search-input');

input.addEventListener('input', function() {
  let filter = input.value 
  let rows = document.querySelectorAll('tr');

  for (let i = 1; i < rows.length; i++) { 
    let row = rows[i];
    let cells = row.querySelectorAll('td'); 
    let found = false;

    for (let j = 0; j < cells.length; j++) {
      let cellText = cells[j].innerText;
      if (cellText.indexOf(filter) > -1) {
        found = true;
        break;
      }
    }

    if (found) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  }
});
