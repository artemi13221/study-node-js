const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/test", (req, res) => {
  res.send('<div style="color:red">바로바로 바꾸기</div>');
});

app.listen(8080, () => {
  console.log("Start Server!");
});