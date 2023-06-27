let records = [
  { id: 1, name: "ram" },
  { id: 2, name: "ravan" },
];

function getData(arr) {
  let output = "";
  setTimeout(() => {
    console.log("In getData");
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

function createData(obj, arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      arr.push(obj);
      console.log("Data Inserted");
      let err = false;
      if (!err) {
        // resolve("Done");
        resolve(arr);
      } else {
        reject("Problem here");
      }
    }, 5000);
  });
}

let obj2 = { id: 4, name: "seeta" };
createData(obj2, records)
  .then((data) => {
    console.log({ data });
    getData(data);
  })
  .catch((error) => {
    console.log("Error: " + error);
  });

// * : same problem solve using async and await two.html
