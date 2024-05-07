const express = require("express");
const { connection } = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("db connected");
  } catch (err) {
    console.log("db is not connected");
    console.log(err);
  }

  console.log(`Server is running at port ${process.env.port}`);
});
