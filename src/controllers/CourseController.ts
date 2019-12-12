import express = require("express");
import CourseBusiness = require("./../app/business/CourseBusiness");
import IBaseController = require("./interfaces/base/BaseController");
import ICourseModel = require("./../app/model/interfaces/ICourseModel");

class HeroController implements IBaseController<CourseBusiness> {
  create(req: express.Request, res: express.Response): void {
    try {
      console.log("Inside HeroController : create", req);
      const hero: ICourseModel = <ICourseModel>req.body;
      console.log(req.body);

      var courseBusiness = new CourseBusiness();
      courseBusiness.create(hero, (error, result) => {
        if (error) res.send({ error: "error" });
        else res.send({ success: "success" });
      });
    } catch (e) {
      console.log(e);
      res.send({ error: "error in your request" });
    }
  }
  update(req: express.Request, res: express.Response): void {
    try {
      var hero: ICourseModel = <ICourseModel>req.body;
      var _id: string = req.params._id;
      var courseBusiness = new CourseBusiness();
      courseBusiness.update(_id, hero, (error, result) => {
        if (error) res.send({ error: "error" });
        else res.send({ success: "success" });
      });
    } catch (e) {
      console.log(e);
      res.send({ error: "error in your request" });
    }
  }
  delete(req: express.Request, res: express.Response): void {
    try {
      var _id: string = req.params._id;
      var courseBusiness = new CourseBusiness();
      courseBusiness.delete(_id, (error, result) => {
        if (error) res.send({ error: "error" });
        else res.send({ success: "success" });
      });
    } catch (e) {
      console.log(e);
      res.send({ error: "error in your request" });
    }
  }
  retrieve(req: express.Request, res: express.Response): void {
    try {
      var courseBusiness = new CourseBusiness();
      courseBusiness.retrieve((error, result) => {
        if (error) res.send({ error: "error" });
        else res.send(result);
      });
    } catch (e) {
      console.log(e);
      res.send({ error: "error in your request" });
    }
  }
  findById(req: express.Request, res: express.Response): void {
    try {
      var _id: string = req.params._id;
      var courseBusiness = new CourseBusiness();
      courseBusiness.findById(_id, (error, result) => {
        if (error) res.send({ error: "error" });
        else res.send(result);
      });
    } catch (e) {
      console.log(e);
      res.send({ error: "error in your request" });
    }
  }
}
export = HeroController;
