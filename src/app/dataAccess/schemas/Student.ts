

const db = require("./../DataAccess");
const Sequelize = require("sequelize");
// const classroom = require('./Classroom')
import course = require("./courseSchema");

class StudentSchema {
  static get schema() {
    

    const student = db.define(
      "student",

      {
        classroom_id: {
            type: Sequelize.INTEGER
          },
          student_name: {
            type: Sequelize.STRING
          },
      },
      {
        freezeTableName: true,
        tableName: "student"
      }
    );
    student.belongsTo(course, {
      foreignKey: '_id',
      as: 'course'
    });
    return student;
  }
}

let schema = StudentSchema.schema;
export =  schema;


