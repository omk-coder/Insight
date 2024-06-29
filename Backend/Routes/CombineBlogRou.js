import express from "express";
import { CombineBlog } from "../Controllers/combineFeed.js";

const router = express.Router();
// /blogs at first
//fetching latest 9 blogs

//get onlyone blog like for hero section or header


//fetching all the blogs

router.get("/", async (req, res) => {
  try {
    /// so in this router in parseblogs function i wante dto make some changes like the content of the blog also gets shown and and i want change the content type like its shows the html tags as well
    const blogs = await CombineBlog();
    res.json(blogs);
  } catch (error) {
    console.error("Error fetching & displaying blogs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const blogs = await CombineBlog();
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