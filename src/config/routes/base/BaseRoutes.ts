import express = require("express");
import Routes = require("../Routes");

const app = express();
const apiVersion = "/api/v1";

class BaseRoutes {
  get routes() {
    app.use(apiVersion, new Routes().routes);

    return app;
  }
}
export = BaseRoutes;
