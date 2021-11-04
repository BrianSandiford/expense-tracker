'use strict';
document.querySelector('#expense').addEventListener('click', function () {
  const expenseName = document.querySelector('#name').value;
  const amount = document.querySelector('#amount').value;
  const date = document.querySelector('#date').value;
  const table = document.getElementById('table');
  const a = String(document.getElementById('table').rows[1].textContent);
  const b = 'No expenses added as yet!';

  if (a.includes(b)) {
    table.deleteRow(1);
    const row = table.insertRow(1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    cell1.innerHTML = expenseName;
    cell2.innerHTML = date;
    cell3.innerHTML = ` $ ${amount}`;
    cell4.innerHTML = '<td><button id="deletebutton">Delete</button> </td>';
  } else {
    const row = table.insertRow(1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    cell1.innerHTML = expenseName;
    cell2.innerHTML = date;
    cell3.innerHTML = ` $ ${amount}`;
    cell4.innerHTML = '<td><button id="deletebutton">Delete</button> </td>';
  }
  console.log(document.querySelectorAll('tr'));
  const deletebutton = document.querySelectorAll('TR');

  for (let i = 0; i < deletebutton.length; i++) {
    deletebutton[i].addEventListener('mouseover', function () {
      deletebutton[i]
        .querySelector('#deletebutton')
        .addEventListener('click', function () {
          this.closest('tr').remove();
        });
    });
  }
});
