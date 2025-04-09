const model = require("../models/shoeModel");

exports.getAllShoes = (req, res) => {
  model.getAll((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

exports.getShoeById = (req, res) => {
  model.getById(req.params.id, (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(row);
  });
};

exports.createShoe = (req, res) => {
  model.create(req.body, (err, id) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Shoe created", id });
  });
};

exports.updateShoe = (req, res) => {
  model.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Shoe updated" });
  });
};

exports.deleteShoe = (req, res) => {
  model.remove(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Shoe deleted" });
  });
};
