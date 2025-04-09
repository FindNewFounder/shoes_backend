// const mysql = require("mysql2");

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "yourpassword", // update this
//   database: "shoestore",
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log("MySQL connected...");
// });

// module.exports = db;

const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const db = new sqlite3.Database(
  path.resolve(__dirname, "data", "shoestore.db"),
  (err) => {
    if (err) return console.error("SQLite error:", err.message);
    console.log("Connected to SQLite database");
  }
);

module.exports = db;
