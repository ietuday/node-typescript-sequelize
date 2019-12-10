const Sequelize = require("sequelize");

// Option 1: Passing parameters separately
class DatabaseConnection {
  static get connection() {
    const db = new Sequelize("abc", "root", "root", {
      host: "localhost",
      dialect: "mysql",
      operatorAlises: false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    });

    return db;
  }
}
let db = DatabaseConnection.connection;

export = db;
