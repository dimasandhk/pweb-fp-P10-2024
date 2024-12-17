const express = require("express");
const router = express.Router();
const AuthService = require("./auth.service");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const user = req.body;
    const newUser = await AuthService.createUser(user);
    res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await AuthService.login(email, password);
    res.status(200).json({
      status: "success",
      message: "User logged in successfully",
      data: { user, token },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
