import {
  signinUser,
  signupUser,
  createProfile,
  getUserProfile,
} from "../controllers/UserController.js";
import express from "express";
import { requireAuth } from "../middleware/Auth.js";
const router = express.Router();

//route for user registration
router.post("/signup", signupUser);
//route for user login
router.post("/signin", signinUser);
//route for profile update
router.post("/create", requireAuth, createProfile);
//route for get user Profile
router.get("/me", requireAuth, getUserProfile);

export default router;
