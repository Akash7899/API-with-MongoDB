const express = require("express");
const router = express.Router();
const MenuItem = require("../models/Menu");

// POST route to add a MenuItem
router.post("/", async (req, res) => {
  try {
    const menudata = req.body;

    // Create person object
    const newmenuitem = new MenuItem(menudata);

    // Save to DB
    const savedmenuData = await newmenuitem.save();
    console.log("Data saved successfully");

    res.status(200).json(savedmenuData);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error saving person");
  }
});

// GET MenuItem Data
router.get("/", async (req, res) => {
  try {
    const menuItemdata = await MenuItem.find();
    res.status(200).json(menuItemdata);
    console.log("Data saved successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error saving person");
  }
});

router.get("/:taste", async (req, res) => {
  try {
    const taste = req.params.taste;
    if (taste == "sweet" || taste == "spicy" || taste == "sour") {
      const tastType = await MenuItem.find({ taste: taste });
      console.log(tastType);
      res.status(200).json(tastType);
    } else {
      res.status(400).send("Invalid taste");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error saving person");
  }
});

module.exports = router; // ✔ Correct export in CommonJS
