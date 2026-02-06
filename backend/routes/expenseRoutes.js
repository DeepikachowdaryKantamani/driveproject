const express = require("express");
const Expense = require("../models/Expense");

const router = express.Router();

// ADD EXPENSE
router.post("/add", async (req, res) => {
  const { itemName, category, amount, date, userId } = req.body;

  const expense = new Expense({
    itemName,
    category,
    amount,
    date,
    userId,
  });

  await expense.save();
  res.json({ message: "Expense added" });
});

// GET USER EXPENSES
router.get("/:userId", async (req, res) => {
  const expenses = await Expense.find({
    userId: req.params.userId,
  }).sort({ date: -1 });

  res.json(expenses);
});

module.exports = router;