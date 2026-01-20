import express from "express";
import db from "../config/db.js";

const router = express.Router();

// GET lost & found items
router.get("/", (req, res) => {
  db.query("SELECT * FROM lost_found", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// ADD lost/found item
router.post("/", (req, res) => {
  const { item_name, location, status, contact } = req.body;

  db.query(
    "INSERT INTO lost_found (item_name, location, status, contact) VALUES (?, ?, ?, ?)",
    [item_name, location, status, contact],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Item reported" });
    }
  );
});

export default router;
