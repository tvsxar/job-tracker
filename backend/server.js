import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import "./db/index.js";
import jobsRoutes from "./routes/jobsRoutes.js";

const app = express();
const PORT = process.env.PORT || 1223;

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobsRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
