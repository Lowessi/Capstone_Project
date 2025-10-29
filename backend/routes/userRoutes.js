import { loginUser, registerUser } from "../controllers/userController.js";
import { requireAuth } from "../middleware/auth.js";
import express from "express";
const router = express.Router();

//route for user registration
router.post("/register", requireAuth, registerUser);
//route for user login
router.post("/login", requireAuth, loginUser);

export default router;
