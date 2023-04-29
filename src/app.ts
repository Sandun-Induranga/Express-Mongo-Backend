import { config } from "dotenv";
// dotenv configuration
config();

import express, { Request, Response } from "express";
import db from "mongoose";
import routes from "./routes";
import { json, urlencoded } from "body-parser";

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/", routes);

app.use((error: Error, req: Request, res: Response) => {
  res.status(500).json({ message: "" });
});

db.connect(process.env.MONGO_DB_URL!)
  .then(() => {
    console.log("Database Connected..!");
    app.listen(process.env.PORT, () => {
      console.log(`Server Liestening on Port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Failed to Connect With MongoDb : " + error);
  });
