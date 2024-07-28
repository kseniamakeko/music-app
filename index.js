const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2/promise");

const app = express();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "music-app",
  timezone: "Z"
});

app.get('/albums', async (req, res) => {
  const query = 'SELECT id, name, authorName, createdAt, description, image_url FROM Album';
  try {
    const [results] = await pool.query(query);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/albums', async (req, res) => {
  const { name, authorName, createdAt, description, image_url } = req.body;
  const query = 'INSERT INTO Album (name, authorName, createdAt, description, image_url) VALUES (?, ?, ?, ?, ?)';
  try {
    const [results] = await pool.query(query, [name, authorName, createdAt, description, image_url]);
    res.status(201).json({
      id: results.insertId,
      name,
      authorName,
      createdAt,
      description,
      image_url
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/albums/:id', async (req, res) => {
  const { id } = req.params;
  const { name, authorName, createdAt, description, image_url } = req.body;
  const query = 'UPDATE Album SET name = ?, authorName = ?, createdAt = ?, description = ?, image_url = ? WHERE id = ?';
  try {
    await pool.query(query, [name, authorName, createdAt, description, image_url, id]);
    res.status(200).json({
      id,
      name,
      authorName,
      createdAt,
      description,
      image_url
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/albums/:id', async (req, res) => {
  const { id } = req.params;
  const deleteSongsQuery = 'DELETE FROM Song WHERE albumId = ?';
  const deleteAlbumQuery = 'DELETE FROM Album WHERE id = ?';

  let connection = null;

  try {
    connection = await pool.getConnection();
    await connection.beginTransaction();

    await connection.query(deleteSongsQuery, [id]);
    await connection.query(deleteAlbumQuery, [id]);

    await connection.commit();
    res.status(200).json({ message: 'Album and associated songs deleted successfully.' });
  } catch (error) {
    if (connection) await connection.rollback();
    console.error('Transaction failed:', error.message);
    res.status(500).json({ error: error.message });
  } finally {
    if (connection) connection.release();
  }
});

app.get('/albums/:albumId/songs', async (req, res) => {
  const { albumId } = req.params;
  const query = 'SELECT id, albumId, name, duration FROM Song WHERE albumId = ?';
  try {
    const [results] = await pool.query(query, [albumId]);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/songs', async (req, res) => {
  const { albumId, name, duration } = req.body;
  const query = 'INSERT INTO Song (albumId, name, duration) VALUES (?, ?, ?)';
  try {
    const [results] = await pool.query(query, [albumId, name, duration]);
    res.status(201).json({ id: results.insertId, albumId, name, duration });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
