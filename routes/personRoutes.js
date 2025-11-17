const express = require("express");
const router = express.Router();
const Person = require("../models/person");

// POST route to add a person
router.post("/", async (req, res) => {
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
    res.status(500).send("Internal server error");
  }
});

// GET person Data
router.get("/", async (req, res) => {
  try {
    const persondata = await Person.find();
    // const persondata = await Person.find({}, { name: 1, _id: 0 });
    res.status(200).json(persondata);
    console.log("Data saved successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

// GET person Data by worktype
router.get("/:worktype", async (req, res) => {
  try {
    const worktype = req.params.worktype;
    if (
      worktype == "chef" ||
      worktype == "cleaner" ||
      worktype == "waiter" ||
      worktype == "manager" ||
      worktype == "receptionist" ||
      worktype == "cashier" ||
      worktype == "cook"
    ) {
      const personWorkType = await Person.find({ work: worktype });
      console.log(personWorkType);
      res.status(200).json(personWorkType);
    } else {
      res.status(400).send("Invalid worktype");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

//PUT updated data

router.put("/:id", async (req, res) => {
  try {
    const personid = req.params.id;
    const updatedata = req.body;

    const updatedPerson = await Person.findByIdAndUpdate(personid, updatedata, {
      new: true,
      runvalidator: true,
    });
    if (!updatedPerson) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("Data saved successfully");
    res.status(200).json({ error: "Person updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const personid = req.params.id;
    const deletedPerson = await Person.findByIdAndDelete(personid);

    if (!deletedPerson) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("Data deleted");
    res.status(200).json({ message: "Person deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});
module.exports = router; // ✔ Correct export in CommonJS
