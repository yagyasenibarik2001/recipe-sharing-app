const express = require("express");
const cors = require("cors");
const fs = require("fs");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Create uploads folder if not exists
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// Multer setup for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// JSON file path
const DATA_FILE = "recipes.json";

// Create JSON file if not exists
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

// 📌 Upload Recipe API
app.post("/api/recipes", upload.single("image"), (req, res) => {
  const { name, description } = req.body;
  const image = req.file.filename;

  const newRecipe = {
    id: Date.now(),
    name,
    description,
    image,
  };

  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  data.push(newRecipe);

  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

  res.json({ message: "Recipe uploaded successfully" });
});

// 📌 Get All Recipes API
app.get("/api/recipes", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  res.json(data);
});

// 📌 Get Single Recipe API
app.get("/api/recipes/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const data = JSON.parse(fs.readFileSync(DATA_FILE));

  const recipe = data.find((r) => r.id === id);

  if (!recipe) {
    return res.status(404).json({ message: "Recipe not found" });
  }

  res.json(recipe);
});

// 📌 Delete Recipe API (Bonus)
app.delete("/api/recipes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let data = JSON.parse(fs.readFileSync(DATA_FILE));

  data = data.filter((recipe) => recipe.id !== id);

  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  res.json({ message: "Recipe deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
