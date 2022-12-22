require("dotenv").config({ path: "./src/config/.env" });
const mysql = require("mysql2");

export class MySQLAdapter {
  private config = {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
  }
  connect() {
    return mysql.createPool(this.config);
  }
}