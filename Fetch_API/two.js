let url = "https://jsonplaceholder.typicode.com/posts";
let options = {
  method: "POST",
  body: JSON.stringify({
    title: "Cricket",
    body: "Raju",
    userId: 1234,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

// Todo : syntax for fetch post api
// fetch(url, options)
// .then((response) => response.json())
// .then((json) => console.log(json))
// .catch((err) => {
//   console.log("Error Here");
// });

// Todo : fetch post api using async await : here we don't use then catch
const createTodo = async (todo) => {
  let url1 = "https://jsonplaceholder.typicode.com/posts";
  let options1 = {
    method: "POST",
    body: JSON.stringify(todo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  console.log("In createTodo");
  console.log(url);
  let p1 = await fetch(url1, options1);
  let response = await p1.json();
  console.log("In createTodo response = ", response);
  return response;
};

const getTodo = async (url) => {
  let p2 = await fetch(url);
  let response2 = await p2.json();
  console.log("In getTodo = ", response2);
  return response2;
};

const main1 = async () => {
  try {
    let todo = {
      title: "Football",
      body: "Akon",
      userId: 5555,
    };
    let x = await createTodo(todo);
    console.log({ x });
    // *: check response fulfilled or not
    if (Object.keys(x).length === 0) {
      console.log("Post request have some problem");
    } else {
      console.log("Value of x = ", x);
    }

    let id = 11;
    let updated_url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    let y = await getTodo(updated_url);
    // *: check response fulfilled or not
    if (Object.keys(y).length === 0) {
      console.log("No data Found");
    } else {
      console.log("Value of y = ", y);
    }
  } catch (error) {
    console.log("Error Here");
  }
};

main1();
