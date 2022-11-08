import { Router } from "express";
import { connection } from "../mysql_connector.js";

const router = Router();
router.get("/products", (req, res) => {
  connection.connect((error) => {
    if (error) throw error;
    console.log("database correcta");
  });
  connection.query("SELECT * FROM bsale_test.product", (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send("no hay resutlados");
    }
    setTimeout(() => {
      connection.destroy();
    }, 2000);
  });
});
export default router;
