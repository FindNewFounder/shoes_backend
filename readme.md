# 🥿 Shoe Store Backend API

A simple backend API for managing shoes inventory — built with **Node.js**, **Express**, and **SQLite3**. Ready to plug into a React/Vue frontend or serve as a RESTful service for mobile/web apps.

## 🚀 Tech Stack

- **Node.js**
- **Express.js**
- **SQLite3**
- **Postman** (for testing APIs)
- **REST API** principles

## 📁 Folder Structure

```
📦 SHOES
 ┣ 📁 models
 ┃ ┗ 📄 shoeModel.js
 ┣ 📁 controllers
 ┃ ┗ 📄 shoeController.js
 ┣ 📁 routes
 ┃ ┗ 📄 shoeRoutes.js
 ┣ 📁 data
 ┃ ┗ 📄 shoestore.db (auto-generated)
 ┣ 📄 db.js
 ┣ 📄 server.js
 ┣ 📄 seed.js
 ┣ 📄 .gitignore
 ┗ 📄 README.md
```

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/shoes-store-backend.git
cd shoes-store-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Seed the Database

This will create a `shoestore.db` file inside `/data` and populate it with sample shoes.

```bash
node seed.js
```

### 4. Start the Server

```bash
node server.js
```

App will run on:
📍 `http://localhost:5000`

## 📬 REST API Endpoints

| Method | Endpoint         | Description          |
| ------ | ---------------- | -------------------- |
| GET    | `/api/shoes`     | Get all shoes        |
| GET    | `/api/shoes/:id` | Get shoe by ID       |
| POST   | `/api/shoes`     | Create a new shoe    |
| PUT    | `/api/shoes/:id` | Update existing shoe |
| DELETE | `/api/shoes/:id` | Delete a shoe        |

## 📮 Postman Collection

1. Download or copy the Postman collection: [`ShoeStore.postman_collection.json`](./ShoeStore.postman_collection.json)
2. Import into Postman
3. Test all routes locally at `http://localhost:5000`

## 🔒 .gitignore Suggestions

```bash
node_modules/
data/*.db
.env
```

## ✅ To-Do (Suggestions)

- [ ] Add validation (e.g., using `express-validator`)
- [ ] Add pagination & filtering
- [ ] Add Swagger for API docs
- [ ] Add authentication
