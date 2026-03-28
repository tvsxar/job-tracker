import { db } from "../db/index.js";

export const getJobs = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM jobs");

    res.status(200).json({
      message: "Jobs fetched",
      jobs: rows,
    });
  } catch (err) {
    console.error("Error fetching jobs:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

export const createJob = async (req, res) => {
  try {
    const { title, company, status, salary } = req.body;

    if (!title || !company) {
      return res.status(400).json({ error: "Title and company are required" });
    }

    const [result] = await db.query(
      "INSERT INTO jobs (title, company, status, salary) VALUES (?, ?, ?, ?)",
      [title, company, status || "applied", salary || null],
    );

    res.status(201).json({
      message: "Job created",
      job: {
        id: result.insertId,
        title,
        company,
        status: status || "applied",
        salary: salary || null,
      },
    });
  } catch (err) {
    console.error("Error creating job:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }

    const [result] = await db.query("DELETE FROM jobs WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.status(200).json({ message: "Job deleted", id });
  } catch (err) {
    console.error("Error deleting job:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};

export const updateJobStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const allowedStatuses = ["applied", "interview", "offer", "rejected"];
    if (!status || !allowedStatuses.includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    const [result] = await db.query("UPDATE jobs SET status = ? WHERE id = ?", [
      status,
      id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.status(200).json({
      message: "Job status was updated",
      job: {
        id,
        status,
      },
    });
  } catch (err) {
    console.error("Error updating job status:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};
