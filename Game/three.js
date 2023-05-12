// let reload = setInterval(function () {
//   let date = new Date();
//   // console.log(date)
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();
//   let am_pm = hours >= 12 ? "PM" : "AM";
//   hours = hours % 12;

//   hours = hours < 10 ? "0" + hours : hours;
//   minutes = minutes < 10 ? "0" + minutes : minutes;
//   seconds = seconds < 10 ? "0" + seconds : seconds;

//   let id_hours = document.getElementById("hours");
//   let id_minutes = document.getElementById("minutes");
//   let id_seconds = document.getElementById("seconds");
//   let id_am_pm = document.getElementById("am_pm");
//   id_hours.innerText = hours;
//   id_minutes.innerText = minutes;
//   id_seconds.innerText = seconds;
//   id_am_pm.innerText = am_pm;
// }, 1000);

const time = () => {
  let date = new Date();
  // console.log(date)
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let am_pm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let id_hours = document.getElementById("hours");
  let id_minutes = document.getElementById("minutes");
  let id_seconds = document.getElementById("seconds");
  let id_am_pm = document.getElementById("am_pm");
  id_hours.innerText = hours;
  id_minutes.innerText = minutes;
  id_seconds.innerText = seconds;
  id_am_pm.innerText = am_pm;
};

setInterval(time, 0);
