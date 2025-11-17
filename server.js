const express = require("express");
const db = require("./db");
const MenuItem = require("./models/Menu");
const app = express();

// Body parser (built-in)
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Import route file
const personRoutes = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuItemRoutes");
app.use("/person", personRoutes);
app.use("/menu", menuItemRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
