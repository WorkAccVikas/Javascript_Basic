console.log("Start");
setTimeout(() => {
  console.log("Callback");
}, 0);
// * : stop main thread for 10 sec
let starttime = new Date().getTime();
let endtime = starttime;
while (endtime < starttime + 10000) {
  endtime = new Date().getTime();
  console.log("hi");
}
console.log("End");
