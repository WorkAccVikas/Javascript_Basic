let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");
let line4 = document.querySelector(".line4");
const run = async () => {
  setTimeout(() => {
    line1.innerHTML += `kali@kali:~$<br>Initialising Hack program ...... <br>`;
  }, 1000);

  setTimeout(() => {
    line2.innerHTML += `Hacking Ashish username ....... <br>`;
  }, 2000);

  setTimeout(() => {
    line3.innerHTML += `username found Ashish17...... <br>`;
  }, 4000);

  setTimeout(() => {
    line4.innerHTML += `Connecting to Facebook ...... <br>kali@kali:~$`;
  }, 7000);
};

const mainfunc = async () => {
  let p = await run();
};
mainfunc();
