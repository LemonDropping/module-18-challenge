const express = require("express");
const routes = require("./routes");
const db = require("./config/connection");

const app = express();
const PORT = process.env.port || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server active on port ${PORT}!`);
  });
});
