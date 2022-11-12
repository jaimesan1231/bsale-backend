import { Router } from "express";
import {
  getProductByName,
  getProductosCategory,
  getProducts,
} from "../controllers/product.controller.js";

const router = Router();
router.get("/products", getProducts);
router.get("/products/category/:id", getProductosCategory);
router.get("/products/search/:name", getProductByName);
export default router;
