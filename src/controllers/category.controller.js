import mysql from "mysql";
import { config } from "../mysql_connector.js";

export const getCategories = (req, res) => {
  const pool = mysql.createPool(config);
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query("SELECT * FROM bsale_test.category", (error, results) => {
      if (error) throw error;
      if (results.length > 0) {
        res.json(results);
      } else {
        res.send("No hay categorias");
      }
      connection.release();
    });
  });
};
