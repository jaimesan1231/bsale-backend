import { Router } from "express";
import {
  getProductosCategory,
  getProducts,
} from "../controllers/product.controller.js";

const router = Router();
router.get("/products", getProducts);
router.get("/products/:id", getProductosCategory);
export default router;
