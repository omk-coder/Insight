
import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  blogId: String, // The ID of the blog post from the RSS feed
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
  createdAt: { type: Date, default: Date.now }
});

const Comment = mongoose.model('Comment', CommentSchema);
export default Comment;