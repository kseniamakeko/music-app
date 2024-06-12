const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(express.static("public"));

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "music-app"
});

app.post("/albums", (req, res) => {
  const { name, authorName, createdAt, description, image_url } = req.body;
  const query =
    "INSERT INTO Album (name, authorName, createdAt, description, image_url) VALUES (?, ?, ?, ?, ?)";
  pool.query(
    query,
    [name, authorName, createdAt, description, image_url],
    (error, results) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.status(201).json({
        id: results.insertId,
        name,
        authorName,
        createdAt,
        description,
        image_url
      });
    }
  );
});

app.get("/albums", (req, res) => {
  const query =
    "SELECT id, name, authorName, createdAt, description, image_url FROM Album";
  pool.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json(results);
  });
});

app.post("/songs", (req, res) => {
  const { albumId, name, duration } = req.body;
  const query = "INSERT INTO Song (albumId, name, duration) VALUES (?, ?, ?)";
  pool.query(query, [albumId, name, duration], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(201).json({ id: results.insertId, albumId, name, duration });
  });
});

app.get("/albums/:albumId/songs", (req, res) => {
  const { albumId } = req.params;
  const query =
    "SELECT id, albumId, name, duration FROM Song WHERE albumId = ?";
  pool.query(query, [albumId], (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
