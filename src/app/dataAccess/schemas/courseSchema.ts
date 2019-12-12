

const db = require("./../DataAccess");
const Sequelize = require("sequelize");
// const classroom = require('./Classroom')
import student = require("./Student");

class CourseSchema {
  static get schema() {
    

    const course = db.define(
        "course",
  
        {
          name: {
            type: Sequelize.STRING,
            allowNull: false
          },
          duration: {
            type: Sequelize.INTEGER,
            allowNull: false
          }
          
        },
        {
          freezeTableName: true,
          tableName: "course"
        }
      );
      course.hasMany(student, {
        foreignKey: 'course_id',
        as: 'course',
      });
    return course;
  }
}

let schema = CourseSchema.schema;
export =  schema;


