import express from "express";
import { productController } from "../config/container.js";

const router = express.Router();

router.post("/", (req, res) => productController.create(req, res));
router.get("/", (req, res) => productController.getAll(req, res));

export default router;