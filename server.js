const express = require("express");
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.sendStatus(418);
});

app.listen(port, () => {
  console.log(`Teapot serving on port ${port}`);
});
