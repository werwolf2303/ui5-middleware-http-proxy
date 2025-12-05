const express = require("express");
const app = express();
const fs = require("fs");

app.get("/test", (req, res) => {
  res.json(
    fs.readFileSync("test.json").toString()
  );
});

app.listen(9000, () => console.log("Backend running on port 9000"));
