const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "music-app",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const insertAlbums = `
  INSERT INTO Album (name, authorName, createdAt, description) VALUES
  ('Album 1', 'Author 1', '2020-01-01', 'Description for Album 1'),
  ('Album 2', 'Author 2', '2019-01-01', 'Description for Album 2'),
  ('Album 3', 'Author 3', '2018-01-01', 'Description for Album 3')
`;

const insertSongs = `
  INSERT INTO Song (albumId, name, duration) VALUES
  (1, 'Song 1', '00:04:30'),
  (1, 'Song 2', '00:03:45'),
  (1, 'Song 3', '00:05:10'),
  (2, 'Song 4', '00:03:15'),
  (2, 'Song 5', '00:04:00'),
  (3, 'Song 6', '00:03:50')
`;

pool.query(insertAlbums, (error, results) => {
  if (error) {
    console.error("Error inserting sample albums:", error);
    process.exit(1);
  }
  console.log("Sample albums inserted successfully");

  pool.query(insertSongs, (error, results) => {
    if (error) {
      console.error("Error inserting sample songs:", error);
      process.exit(1);
    }
    console.log("Sample songs inserted successfully");
    process.exit(0);
  });
});
