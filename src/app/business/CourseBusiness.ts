import CourseRepository = require("./../repository/CourseRepository");
import ICourseBusiness = require("./interfaces/CourseBusiness");
import ICourseModel = require("./../model/interfaces/ICourseModel");
import HeroModel = require("./../model/HeroModel");

class CourseBusiness implements CourseBusiness {
  private _courseRepository: CourseRepository;

  constructor() {
    this._courseRepository = new CourseRepository();
  }

  create(item: ICourseModel, callback: (error: any, result: any) => void) {
    this._courseRepository.create(item, callback);
  }

  retrieve(callback: (error: any, result: any) => void) {
     this._courseRepository.retrieveAllCourse(callback);
  }

  update(
    _id: string,
    item: ICourseModel,
    callback: (error: any, result: any) => void
  ) {
    this._courseRepository.findById(_id, (err, res) => {
        if(err) callback(err, res);
        else
            this._courseRepository.update(_id, item, callback);
    });
  }

  delete(_id: string, callback: (error: any, result: any) => void) {
    this._courseRepository.delete(_id , callback);
  }

  findById(_id: string, callback: (error: any, result: ICourseModel) => void) {
     this._courseRepository.retrieveByID(_id, callback);
  }
}

Object.seal(CourseBusiness);
export = CourseBusiness;
