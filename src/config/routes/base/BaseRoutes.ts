import express = require("express");
import HeroRoutes = require("./../HeroRoutes");

const app = express();
const apiVersion = "/api/v1";

class BaseRoutes {
  get routes() {
    app.use(apiVersion, new HeroRoutes().routes);

    return app;
  }
}
export = BaseRoutes;
