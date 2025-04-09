const db = require("./db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS shoes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      brand TEXT,
      price REAL,
      size INTEGER,
      stock INTEGER,
      imageUrl TEXT
    )
  `);

  const stmt = db.prepare(`
    INSERT INTO shoes (name, brand, price, size, stock, imageUrl)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  const sampleShoes = [
    [
      "Air Max 90",
      "Nike",
      129.99,
      10,
      20,
      "https://example.com/nike-air-max.jpg",
    ],
    [
      "Ultraboost 21",
      "Adidas",
      149.99,
      9,
      15,
      "https://example.com/adidas-ultraboost.jpg",
    ],
    [
      "Classic Leather",
      "Reebok",
      89.99,
      8,
      30,
      "https://example.com/reebok-leather.jpg",
    ],
    [
      "Chuck Taylor",
      "Converse",
      59.99,
      7,
      25,
      "https://example.com/converse-chuck.jpg",
    ],
    [
      "Gel-Kayano 28",
      "ASICS",
      139.99,
      11,
      10,
      "https://example.com/asics-kayano.jpg",
    ],
  ];

  sampleShoes.forEach((shoe) => stmt.run(shoe));
  stmt.finalize();
  console.log("Database seeded!");
});
