const mongoose = require("mongoose");

// MongoDB connection URL
const mongoURL = "mongodb://localhost:27017/hotels";

// Connect to MongoDB
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Default connection
const db = mongoose.connection;

// Connection events
db.on("connected", () => {
  console.log("Connected to MongoDB Server");
});

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.on("disconnected", () => {
  console.log("MongoDB connection disconnected");
});

// Export
module.exports = db;
