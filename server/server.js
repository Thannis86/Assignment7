import express, { query } from "express";
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

// app.post("/formEntry", async (req, res) => {
//   const data = req.body.formValues;
//   const query = await db.query(
//     `INSERT INTO posts (name, email, phone, words) VALUES ($1, $2, $3, $4)`,
//     await db.query(query, [data.name, data.email, data.phone, data.words])
//   );
// });

app.post("/formEntry", (req, res) => {
  const data = req.body;

  const query = db.query(
    `INSERT INTO posts (name, email, phone, words)
        VALUES ($1, $2, $3, $4)
      `,
    [data.name, data.email, data.phone, data.words]
  );
  console.log("Data received:", data);
  res.json({ message: "Data updated! Go have a look in your table" });
});
