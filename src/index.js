import express from "express";
import productRoutes from "./routes/product.routes.js";
import categoryRoutes from "./routes/category.router.js";
import cors from "cors";
import { config } from "dotenv";
config();

const app = express();
app.use(cors());
app.use(productRoutes);
app.use(categoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
