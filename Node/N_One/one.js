var pdf = require("pdf-creator-node");
var fs = require("fs");
// var prompt = require("prompt");
// prompt.start();
const prompt = require("prompt-sync")({ sigint: true }); // * : work in node js
// Read HTML Template
var html = fs.readFileSync("one.html", "utf8");

// size related code

var options = {
  format: "A4",
  orientation: "portrait",
  border: "10mm",
  header: {
    height: "45mm",
    contents: '<div style="text-align: center;">Author: Tata</div>',
  },
  footer: {
    height: "28mm",
    contents: {
      first: "Cover page",
      2: "Second page", // Any page number is working. 1-based index
      default:
        '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
      last: "Last Page",
    },
  },
};

// html data

var users = [
  {
    name: prompt("Enter your name"),

    age: prompt("Enter your age"),
  },
  {
    name: "Neeraj Jain",
    age: "20",
  },
  {
    name: "Naveen Jain",
    age: "24",
  },
];
var document = {
  html: html,
  data: {
    users: users,
  },
  path: "./output.pdf",
  type: "",
};

// call this method
pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
