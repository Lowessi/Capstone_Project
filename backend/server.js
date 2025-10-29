import express from "express";
import cors from "cors";
import dotenv from "dotenv";

//dotenv config
dotenv.config();
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
import userRoutes from "./routes/userRoutes.js";
app.use("/api/users", userRoutes);

app.use("/api/posts", (req, res) => {
  res.send("Posts route is under construction.");
});

//port setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Basic route for testing
app.get("/", (req, res) => {
  res.send("Hello from the backend server!");
});

// MongoDB connection
import connectDB from "./configDB.js";
connectDB();
