let records = [
  { id: 1, name: "ram" },
  { id: 2, name: "ravan" },
];

function getData(arr) {
  console.log("In getData = ", arr);
  let output = "";
  setTimeout(() => {
    arr.forEach((data, index) => {
      output += `<ul>
                  <li>
                    ${data.id}
                    <ul>
                      <li>${data.name}</li>
                    </ul>
                  </li>
                </ul>`;
    });

    document.body.innerHTML = output;
  }, 2000);
}
// getData(records);

// function addData(obj, arr) {
//   setTimeout(() => {
//     arr.push(obj);
//     console.log(arr);
//   }, 5000);
// }

// let obj1 = { id: 3, name: "laxman" };
// addData(obj1, records);

// Todo : here getData takes 2 sec and addData takes 5 sec => so we need callback

// Todo : Callback
function createData(obj, arr, callback) {
  setTimeout(() => {
    arr.push(obj);
    console.log(arr);
    console.log(this); // ! : window object
    callback();
  }, 5000);
}

let obj2 = { id: 4, name: "seeta" };
createData(obj2, records, getData.bind(null, records));
// Todo : here createData first call it takes 10 sec after finish execution getData will call

// * : same problem using Promise eight.html
