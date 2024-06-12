const fs = require("fs");
const mysql = require("mysql2");

const sql = fs.readFileSync("./init.sql", "utf8");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "music-app",
  multipleStatements: true
});

connection.query(sql, (err) => {
  if (err) {
    console.error("Error executing migration script:", err);
    process.exit(1);
  }
  console.log("Database schema created successfully");
  process.exit(0);
});
