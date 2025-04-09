const db = require("../db");

exports.getAll = (cb) => {
  db.all("SELECT * FROM shoes", [], cb);
};

exports.getById = (id, cb) => {
  db.get("SELECT * FROM shoes WHERE id = ?", [id], cb);
};

exports.create = ({ name, brand, price, size, stock, imageUrl }, cb) => {
  db.run(
    "INSERT INTO shoes (name, brand, price, size, stock, imageUrl) VALUES (?, ?, ?, ?, ?, ?)",
    [name, brand, price, size, stock, imageUrl],
    function (err) {
      cb(err, this?.lastID);
    }
  );
};

exports.update = (id, { name, brand, price, size, stock, imageUrl }, cb) => {
  db.run(
    `UPDATE shoes SET name=?, brand=?, price=?, size=?, stock=?, imageUrl=? WHERE id=?`,
    [name, brand, price, size, stock, imageUrl, id],
    cb
  );
};

exports.remove = (id, cb) => {
  db.run("DELETE FROM shoes WHERE id = ?", [id], cb);
};
