import express from "express";
import productRoutes from "./infrastructure/routes/productRoutes.js";
import { productController } from "./infrastructure/config/container.js";

const app = express();

app.use(express.json());

app.use("/products", productRoutes);

export default app;