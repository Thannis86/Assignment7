import express from "express";
const app = express();

import cors from "cors";
app.use(cors());

import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

app.use(express.json());

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

app.get("/", (req, res) => {
  res.json({ message: "This is the route of the root! Feeling:Happy!" });
});

const dbConnectionString = process.env.DATABASE_URL;
const db = new pg.Pool({
  connectionString: dbConnectionString,
});

app.get("/posts", async (req, res) => {
  const query = await db.query("SELECT * FROM posts");
  await res.json(query.rows);
});

app.post("/submit-data", async (req, res) => {
  const data = req.body.formData;
  console.log(data);
  const query = `INSERT INTO posts (name, email, phone, words)
  VALUES ($1, $2, $3, $4)`;
  await db.query(query, [data.name, data.email, data.phone, data.words]);
});

app.post("/likes", async (req, res) => {
  const data = req.body;
  console.log(data);
  const query = `UPDATE posts
SET likes = likes + 1
WHERE id = $1;`;
  await db.query(query, [data.id]);
});
