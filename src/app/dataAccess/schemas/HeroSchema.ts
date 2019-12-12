const db = require("./../DataAccess");
const Sequelize = require("sequelize");

class HeroSchema {
  static get schema() {
    

    const Hero = db.define(
      "hero",

      {
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        power: {
          type: Sequelize.STRING,
          allowNull: false
        },
        amountPeopleSaved: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      },
      {
        freezeTableName: true,
        tableName: "ABC"
      }
    );

   
   

    const student = db.define(
      "student",

      {
       
          student_name: {
            type: Sequelize.STRING
          },
         surname: {
            type: Sequelize.STRING
          },
          age: {
            type: Sequelize.INTEGER
          },
          class: {
            type: Sequelize.INTEGER
          },
      },
      {
        freezeTableName: true,
        tableName: "student"
      }
    );
    

    const course = db.define(
      "cours",

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
        tableName: "cours"
      }
    );
    course.hasMany(student, {
      foreignKey: 'course_id',
      // as: 'course',
    });

    
    return {Hero,course,student}
    
        
  }
}

let schema = HeroSchema.schema;
export = schema;
