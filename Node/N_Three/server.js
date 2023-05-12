const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
app.use(express.static(__dirname + "/dist"));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/one", (req, res) => {
  res.sendFile(path.join(__dirname, "one/one.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
