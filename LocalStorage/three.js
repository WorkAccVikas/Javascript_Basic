let form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let key = document.getElementById("key").value;
  let value = document.getElementById("value").value;
  localStorage.setItem(key, value);
  display();
  clearform();
});

let clearform = () => {
  document.getElementById("form").reset();
};

let clearLocalStorage = () => {
  localStorage.clear();
  display();
};

let display = () => {
  let i = 0;
  let ihtml = "";
  for (i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    ihtml += `<tr>
                <th scope="row">${i + 1}</th>
                <td>${key}</td>
                <td>${localStorage.getItem(key)}</td>
                <td>
                  <button type="button" class="btn btn-primary bg-dark" onclick="{oneitomdel(${i})}">Delete</button>
                </td>        
              </tr>`;
  }
  document.getElementById("list").innerHTML = ihtml;
};

let oneitomdel = (key) => {
  let keyname = localStorage.key(key);
  console.log("index = ", keyname);
  localStorage.removeItem(keyname);
  display();
};

document.body.onload = () => {
  display();
};
