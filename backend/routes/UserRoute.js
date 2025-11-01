import { signinUser, signupUser } from "../controllers/userController.js";
import { requireAuth } from "../middleware/auth.js";
import express from "express";
const router = express.Router();

//route for user registration
router.post("/signup", signupUser);
//route for user login
router.post("/signin", requireAuth, signinUser);

export default router;
