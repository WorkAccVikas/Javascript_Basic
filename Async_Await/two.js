function getData(arr) {
  return new Promise((resolve, reject) => {
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
      resolve(true);
    }, 15000);
  });
}

function hello() {
  console.log("hello");
  return "hi";
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

const start = async () => {
  let obj1 = { id: 5, name: "vibhishan" };
  let records = [
    { id: 1, name: "ram" },
    { id: 2, name: "ravan" },
  ];
  let x = await createData(obj1, records);
  console.log({ x });
  let y = await getData(x);
  console.log({ y });
  let z = hello();
  console.log({ z });
};

start();

// * : same problem solve with callback two.html
