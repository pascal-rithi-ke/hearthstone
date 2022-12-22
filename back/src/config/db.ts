require("dotenv").config({ path: "./src/config/.env" });

const mysql = require("mysql2");

// Paramètres de connexion à la base de données
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// export pour utiliser cette connexion
module.exports.getDB = () => {
  return db;
};
