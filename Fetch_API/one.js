// Todo : syntax for fetch get api
let p1 = fetch("https://jsonplaceholder.typicode.com/posts");

p1.then((response) => {
  console.log(response);
  return response.json();
  //   *: or
  //   let x = response.json();
  //   console.log(x);
  //   return x;
})
  .then((data) => {
    console.log(!data);
    if (!Object.keys(data).length) {
      console.log("no data found");
      throw new Error("Data Empty");
    }
    console.log(data);
  })
  .catch((err) => {
    console.log("Error Here", err);
  });
