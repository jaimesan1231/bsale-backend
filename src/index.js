import express from "express";
import productRoutes from "./routes/product.routes.js";
import categoryRoutes from "./routes/category.router.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(productRoutes);
app.use(categoryRoutes);

app.listen("8000", () => {
  console.log("iniciado en el puerto 8000");
});

app.get("/", (req, res) => {
  res.send("aea mongol");
});
