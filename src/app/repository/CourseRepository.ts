import HeroModel = require("./../model/HeroModel");
import Hero = require("./../dataAccess/schemas/HeroSchema");
import Course = require("./../dataAccess/schemas/courseSchema");
import RepositoryBase = require("./base");
import CourseModel = require("../model/interfaces/ICourseModel");

class CourseRepository extends RepositoryBase<CourseModel> {
  
  // class CourseRepository {
  constructor() {
    super(Hero.course);
  }

  // 
  


  retrieveAllCourse(callback: (error: any, result: any) => void) {
   this._model.findAll({
      include: [{
        model: Hero.student,
        // as: 'course'
      }],
     
    })
    .then(result => {
      callback(null, result)})
    .catch((error) => console.log(error))
    
  }



  retrieveByID(_id: string, callback: (error: any, result: any) => void) {       
    this._model.findOne( {where: {
      id: _id
   },
   include: [{
    model: Hero.student,
    // as: 'course'
  }],
  }).then(result => {
    callback(null, result);       
})     
  .catch(err => {
    console.log("Error", err);
  });
}


  // retrieveByID(callback: (error: any, result: any) => void) {
  //   this._model.findOne({
       
      
  //    })
  //    .then(result => {
  //      callback(null, result)})
  //    .catch((error) => console.log(error))
     
  //  }


}

Object.seal(CourseRepository);
export = CourseRepository;
