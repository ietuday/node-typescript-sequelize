const db = require("./../DataAccess");
const Sequelize = require("sequelize");

class HeroSchema {
  static get schema() {
    console.log(Sequelize);

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

    return Hero;
  }
}

let schema = HeroSchema.schema;
export = schema;
