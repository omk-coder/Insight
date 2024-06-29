import express from 'express'
import  Bookmark from '../models/BookMark.js'
import auth from '../Middleware/authentication.js'

const router = express.Router();


// Helper function to extract blogId from URL
const extractBlogId = (url) => {
  const regex = /https:\/\/medium\.com\/p\/([a-zA-Z0-9]+)/;
  const match = regex.exec(url);
  return match ? match[1] : null;
};

// Endpoint to add a bookmark for a blog
router.post('/:blogId/bookmark', auth, async (req, res) => {
  try {
    console.log(`Received blogId: ${req.params.blogId}`);
    const blogId = extractBlogId(req.params.blogId) || req.params.blogId;
    console.log(`Extracted blogId: ${blogId}`);
    const existingBookmark = await Bookmark.findOne({ blogId, user: req.user.userId }); //this userId is from token section  and req.user is from auth section
    if (existingBookmark) {
      return res.status(400).json({ error: 'You have already bookmarked this blog' });
    }
    const bookmark = new Bookmark({ blogId, user: req.user.userId });
    await bookmark.save();
    res.status(201).json(bookmark);
  } catch (error) {
    console.error('Error adding bookmark:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to get bookmarks for the authenticated user
router.get('/bookmark', auth, async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({ user: req.user.userId }).populate('blogId');
    res.json(bookmarks);
  } catch (error) {
    console.error('Error fetching bookmarks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;

// router.post('/:blogId/bookmarks', auth, async (req, res) => {
//   const { blogId, title, user } = req.body;
  
//   try {
//     const newBookmark = new Bookmark({ blogId, title, user });
//     await newBookmark.save();
//     res.status(201).json(newBookmark);
//     console.log("Done Bookmark saved")
//   } catch (error) {
//     res.status(500).json({ error: 'Error saving bookmark' });
//   }
// });
