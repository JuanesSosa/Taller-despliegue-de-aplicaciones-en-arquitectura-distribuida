import express from "express";
import productRoutes from "./infrastructure/routes/productRoutes.js";
import { productController } from "./infrastructure/config/container.js";
import cors from "cors";
app.use(cors());

const app = express();

app.use(express.json());

app.use("/products", productRoutes);

export default app;