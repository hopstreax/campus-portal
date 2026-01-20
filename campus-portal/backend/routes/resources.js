import express from "express";
import db from "../config/db.js";

const router = express.Router();

// GET all resources
router.get("/", (req, res) => {
  db.query("SELECT * FROM resources", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// ADD resource
router.post("/", (req, res) => {
  const { name, category, availability, contact } = req.body;

  const sql =
    "INSERT INTO resources (name, category, availability, contact) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, category, availability, contact], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Resource added" });
  });
});

export default router;
