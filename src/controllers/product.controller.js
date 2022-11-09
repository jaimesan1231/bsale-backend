import mysql from "mysql";
import { config } from "../mysql_connector.js";

export const getProducts = (req, res) => {
  const pool = mysql.createPool(config);
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query("SELECT * FROM bsale_test.product", (error, results) => {
      if (error) throw error;
      if (results.length > 0) {
        res.json(results);
      } else {
        res.send("no hay resutlados");
      }
      connection.release();
    });
  });
};
export const getProductosCategory = (req, res) => {
  const { id } = req.params;
  const pool = mysql.createPool(config);
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      `SELECT * FROM bsale_test.product WHERE category = ${id}`,
      (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
          res.json(results);
        } else {
          res.send("No hay resultados");
        }
      }
    );
  });
};
