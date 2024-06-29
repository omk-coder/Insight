import express from "express";
import { parseBCBlogs } from "../Controllers/Blockchainfeed.js";

const router = express.Router();

// Fetch the latest single blog for hero section or header
router.get("/latest/one", async (req, res) => {
  try {
    const blogs = await parseBCBlogs();
    res.json(blogs.slice(0, 1));
  } catch (error) {
    console.error("Error fetching the latest blog:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Fetch the latest four blogs
router.get("/latest/four", async (req, res) => {
  try {
    const blogs = await parseBCBlogs();
    res.json(blogs.slice(0, 4));
  } catch (error) {
    console.error("Error fetching the latest 4 blogs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Fetch and display all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await parseBCBlogs();
    res.json(blogs);
  } catch (error) {
    console.error("Error fetching and displaying blogs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Fetch and display a blog by ID
router.get("/:id", async (req, res) => {
  try {
    const blogs = await parseBCBlogs();
    const blogId = req.params.id;
    const blog = blogs.find((b) => b.id === decodeURIComponent(blogId));
    if (blog) {
      res.json(blog);
    } else {
      res.status(404).json({ error: "Blog not found" });
    }
  } catch (error) {
    console.error("Error displaying detailed blog by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
