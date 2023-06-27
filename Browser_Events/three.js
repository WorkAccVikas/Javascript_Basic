let btnGoogle = document.querySelector("#google");

btnGoogle.addEventListener("click", function () {
  window.location = "https://www.google.com";
  window.focus();
});

const fetchContent = async (url) => {
  con = await fetch(url);
  let a = await con.json();
  return a;
};

var id = 0;
let timer = setInterval(async function () {
  console.log(++id);
  if (id === 101) {
    clearInterval(timer);
  } else {
    let url = `https://dummyjson.com/products/${id}`;
    console.log(await fetchContent(url));
  }
}, 30);

setInterval(async function () {
  document.querySelector("#bulb").classList.toggle("bulb");
}, 300);
