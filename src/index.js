import express from "express";
import productRoutes from "./routes/product.routes.js";

const app = express();
app.use(productRoutes);

app.listen("8000", () => {
  console.log("iniciado en el puerto 8000");
});

app.get("/", (req, res) => {
  res.send("aea mongol");
});
