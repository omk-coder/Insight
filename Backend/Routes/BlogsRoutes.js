import express from "express";
import { parseBlogs } from "../Controllers/rssServicesBlog.js";

const router = express.Router();
// /blogs at first
//fetching latest 9 blogs

router.get("/latest", async (req, res) => {
  try {
    const blog = await parseBlogs();
    res.json(blog.slice(0, 4));
  } catch (error) {
    console.error("Error fetching latest blogs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//get onlyone blog like for hero section or header
router.get("/latest/one", async (req, res) => {
  try {
    const blog = await parseBlogs();
    res.json(blog.slice(0, 1));
  } catch (error) {
    console.error("Error fetching latest 1 blogs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//fetching all the blogs

router.get("/", async (req, res) => {
  try {
    /// so in this router in parseblogs function i wante dto make some changes like the content of the blog also gets shown and and i want change the content type like its shows the html tags as well
    const blogs = await parseBlogs();
    res.json(blogs);
  } catch (error) {
    console.error("Error fetching & displaying blogs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const blogs = await parseBlogs();
    const blogId = req.params.id;
    const blog = blogs.find((b) => b.id === decodeURIComponent(blogId));
    if (blog) {
      res.json(blog);
    } else {
      res.status(404).json({ error: "Blog not found" });
    }
  } catch (error) {
    console.error("Error displaying detailed blogs:  by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
export default router;
