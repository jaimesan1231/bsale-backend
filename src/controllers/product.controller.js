import mysql from "mysql";
import { dbConfig } from "../db_config.js";

export const getProducts = (req, res) => {
  const pool = mysql.createPool(dbConfig);
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query("SELECT * FROM bsale_test.product", (error, results) => {
      if (error) throw error;
      if (results.length > 0) {
        res.json(results);
      } else {
        res.send("no hay resultados");
      }
      connection.release();
    });
  });
};
export const getProductosCategory = (req, res) => {
  const { id } = req.params;
  const pool = mysql.createPool(dbConfig);
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      `SELECT * FROM bsale_test.product WHERE category = ${id}`,
      (error, results) => {
        if (error) throw error;
        res.json(results);
      }
    );
  });
};

export const getProductByName = (req, res) => {
  const { name } = req.params;
  const pool = mysql.createPool(dbConfig);
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      `SELECT * FROM bsale_test.product where name like '%${name}%'`,
      (error, results) => {
        if (error) throw error;
        res.json(results);
      }
    );
  });
};
