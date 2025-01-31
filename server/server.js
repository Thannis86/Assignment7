import express from "express";
const app = express();

import cors from "cors";
app.use(cors());

import pg from "pg";
import dotenv from "dotenv";
dotenv.config;

app.use(express.json());

const port = 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const dbConnectionString = process.env.DATABASE_URL;
const db = new pg.pool({
  connectionString: dbConnectionString,
});

app.get("/posts", async (req, res) => {
  const query = await db.query("SELECT * FROM posts");
  await res.json(query.rows);
});
