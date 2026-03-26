import express from 'express';
import { loginUser, createUser } from '../controllers/userControllers.js';
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

// ✅ Register
router.post("/user", createUser);

// ✅ Login
router.post("/login", loginUser);

// ✅ Protected route
router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Profile data",
    user: req.user
  });
});

export default router;
