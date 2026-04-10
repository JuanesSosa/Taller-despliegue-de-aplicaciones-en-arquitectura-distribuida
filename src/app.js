import express from "express";
import cors from "cors"; // 👈 IMPORTANTE
import productRoutes from "./infrastructure/routes/productRoutes.js";

const app = express();

app.use(cors()); // 👈 ESTA ES LA CLAVE
app.use(express.json());

app.use("/products", productRoutes);

export default app;