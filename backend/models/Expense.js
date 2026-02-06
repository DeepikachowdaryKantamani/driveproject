const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  itemName: String,
  category: String,
  amount: Number,
  date: Date,

  // 🔗 LINK TO USER
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Expense", ExpenseSchema);