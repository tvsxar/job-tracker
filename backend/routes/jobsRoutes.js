import express from "express";
import {
  getJobs,
  createJob,
  deleteJob,
  updateJobStatus,
} from "../controllers/jobsController.js";

const router = express.Router();

router.get("/", getJobs);
router.post("/", createJob);
router.patch("/:id", updateJobStatus);
router.delete("/:id", deleteJob);

export default router;
