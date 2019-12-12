import HeroModel = require("./../model/HeroModel");
import IStudentModel = require("./../model/interfaces/IStudentModel");
// import Student = require("./../dataAccess/schemas/Student");
import Hero = require("./../dataAccess/schemas/HeroSchema");
import RepositoryBase = require("./base");

class StudentRepository extends RepositoryBase<IStudentModel> {
  // class HeroRepository {
  constructor() {
    super(Hero.student);
  }

  // create(item: any, callback: (error: any, result: any) => void) {
  //   console.log("Inside HeroRepository", item);
  //   // callback(null, item)
  //   Hero.sync({ force: true }).then(res => {
  //     Hero.create(item).then(jane => {
  //       console.log("Jane's auto-generated ID:", jane.id);
  //       callback(null, jane);
  //     });
  //   });
  // }
}

Object.seal(StudentRepository);
export = StudentRepository;