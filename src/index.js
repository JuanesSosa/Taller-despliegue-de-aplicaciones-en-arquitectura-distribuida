import express from "express";
import "dotenv/config";
import { connectMongo } from "./infrastructure/database/mongo.js";
import { productController } from "./infrastructure/config/container.js";

const app = express();

app.use(express.json());

app.post("/products", (req, res) => productController.create(req, res));
app.get("/products", (req, res) => productController.getAll(req, res));

const PORT = process.env.PORT || 3000;

async function start() {
  await connectMongo();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

start();