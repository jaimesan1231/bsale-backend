import mysql from "mysql";
import { dbConfig } from "../db_config.js";

export const getCategories = (req, res) => {
  const pool = mysql.createPool(dbConfig);
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
