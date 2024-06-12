const fs = require("fs");
const mysql = require("mysql2");

const migrationName = process.argv[2];
if (!migrationName) {
  console.log("Migration name must be provided");
  return;
}

const sql = fs.readFileSync("./" + migrationName, "utf8");

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
