import express = require("express");
require("dotenv").config();
import db = require("./app/dataAccess/DataAccess");
import Middlewares = require("./config/middlewares/base/");

console.log("Hited");

const app = express();
const port = parseInt(process.env.PORT, 10) || 5000;
app.set("port", port);
app.use(Middlewares.configuration);
db.authenticate()
  .then(res => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

if (process.env.NODE_ENV == "development") {
  app.listen(port, "0.0.0.0", () => {
    console.log("Inside Local");

    console.log("Node app is running at localhost:" + port);
  });
} else {
  app.listen(port, "0.0.0.0", () => {
    console.log("Node app is running at localhost:" + port);
  });
}
