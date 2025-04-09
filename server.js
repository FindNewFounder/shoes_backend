const express = require("express");
const cors = require("cors");
const shoeRoutes = require("./routes/shoes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/shoes", shoeRoutes);

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
