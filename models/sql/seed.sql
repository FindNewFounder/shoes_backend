CREATE DATABASE IF NOT EXISTS shoestore;
USE shoestore;

CREATE TABLE IF NOT EXISTS shoes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  brand VARCHAR(100),
  price DECIMAL(10,2),
  size INT,
  stock INT,
  imageUrl TEXT
);

INSERT INTO shoes (name, brand, price, size, stock, imageUrl)
VALUES
('Air Max 90', 'Nike', 129.99, 10, 20, 'https://example.com/nike-air-max.jpg'),
('Ultraboost 21', 'Adidas', 149.99, 9, 15, 'https://example.com/adidas-ultraboost.jpg'),
('Classic Leather', 'Reebok', 89.99, 8, 30, 'https://example.com/reebok-leather.jpg'),
('Chuck Taylor', 'Converse', 59.99, 7, 25, 'https://example.com/converse-chuck.jpg'),
('Gel-Kayano 28', 'ASICS', 139.99, 11, 10, 'https://example.com/asics-kayano.jpg');
