const express = require("express");
const db = require("./db");
const Person = require("./models/person");
const MenuItem = require("./models/Menu");
const app = express();

// Body parser (built-in)
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// POST route to add a person
app.post("/person", async (req, res) => {
  try {
    const data = req.body;

    // Create person object
    const newPerson = new Person(data);

    // Save to DB
    const savedData = await newPerson.save();
    console.log("Data saved successfully");

    res.status(200).json(savedData);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error saving person");
  }
});

// GET person Data
app.get("/person", async (req, res) => {
  try {
    const persondata = await Person.find();
    // const persondata = await Person.find({}, { name: 1, _id: 0 });
    res.status(200).json(persondata);
    console.log("Data saved successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error saving person");
  }
});

// POST route to add a MenuItem
app.post("/menuitem", async (req, res) => {
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
app.get("/menuitem", async (req, res) => {
  try {
    const menuItemdata = await MenuItem.find();
    // const persondata = await Person.find({}, { name: 1, _id: 0 });
    res.status(200).json(menuItemdata);
    console.log("Data saved successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error saving person");
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
