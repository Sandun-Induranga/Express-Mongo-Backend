import { config } from "dotenv";
// dotenv configuration
config();

import express from "express";
import db from "mongoose";

const app = express();

db.connect(process.env.MONGO_DB_URL!)
  .then(() => {
    console.log("Database Connected..!");
    app.listen(process.env.PORT, () => {
      console.log("Server Liestening on Port 5000");
    });
  })
  .catch((error) => {
    console.log("Failed to Connect With MongoDb : " + error);
  });
