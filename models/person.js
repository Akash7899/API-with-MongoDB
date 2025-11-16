const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,

  work: {
    type: String,
    enum: [
      "chef",
      "cleaner",
      "waiter",
      "manager",
      "receptionist",
      "cashier",
      "cook",
    ],
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  phone: {
    type: String,
    required: true,
  },

  address: String,
  salary: Number,
});

const Person = mongoose.model("Person", PersonSchema);

module.exports = Person; // ✔ Correct export in CommonJS
