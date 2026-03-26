import express from 'express';
import { loginUser, createUser} from '../controllers/userControllers.js';
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.post("/", createUser);
router.post("/login", loginUser);

// ✅ FIXED
router.get("/profile", authMiddleware);

router.get("/", authMiddleware, (req, res) => {
  res.json({ message: "Protected route" });
});

export default router;
