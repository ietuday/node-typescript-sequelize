import express = require("express");
import HeroController = require("../../controllers/HeroController");
import CourseController = require("../../controllers/CourseController");

var router = express.Router();
class Routes {
  private _heroController: HeroController;
  private _courseController: CourseController;
  

  constructor() {
    this._heroController = new HeroController();
    this._courseController = new CourseController();
  }
  get routes() {

    //hero API
    const herocontroller = this._heroController;
    router.get("/heroes", herocontroller.retrieve);
    router.post("/heroes", herocontroller.create);
    router.put("/heroes/:_id", herocontroller.update);
    router.get("/heroes/:_id", herocontroller.findById);
    router.delete("/heroes/:_id", herocontroller.delete);




    //student
    const courseController = this._courseController;
    router.get("/students", courseController.retrieve);
    router.post("/students", courseController.create);
    router.put("/heroes/:_id", courseController.update);
    router.get("/course/:_id", courseController.findById);
    router.delete("/heroes/:_id", courseController.delete);

    return router;
  }
}

Object.seal(Routes);
export = Routes;
