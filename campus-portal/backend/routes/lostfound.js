import express from "express";
import db from "../config/db.js";

const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM lost_found", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

router.post("/", (req, res) => {
  const { item_name, location, status, contact } = req.body;

  const sql =
    "INSERT INTO lost_found (item_name, location, status, contact) VALUES (?, ?, ?, ?)";

  db.query(sql, [item_name, location, status, contact], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Item reported" });
  });
});

export default router;
