let table = document.body.firstElementChild.firstElementChild;
console.log(table);
console.log(table.rows);
console.log(table.caption);
console.log(table.tHead);
console.log(table.tHead.firstElementChild);
console.log(table.tHead.firstElementChild.firstElementChild);
console.log(table.tFoot);
console.log(table.tBodies);
console.log(table.rows[1].cells);
console.log(table.rows[1].cells.length);
console.log(table.rows[0].rowIndex);
console.log(table.rows[1].firstElementChild.cellIndex);
console.log(table.rows[1].firstElementChild.nextElementSibling.cellIndex);
console.log(
  table.rows[1].firstElementChild.nextElementSibling.nextElementSibling
    .cellIndex
);

function myFunction(x) {
  alert("Cell index is: " + x.cellIndex);
}

function myFunction1(x) {
  alert("Section row index is: " + x.sectionRowIndex);
}
// console.log(table.);
// console.log(table.);
// console.log(table.);
// console.log(table.);
// console.log(table.);
// console.log(table.);
