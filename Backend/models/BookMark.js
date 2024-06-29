
import mongoose from 'mongoose';
const BookmarkSchema = new mongoose.Schema({
  blogId: { type: String, required: true },  // ID from the RSS feed
  title: { type: String, required: true }, 
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});
const Bookmark = mongoose.model('Bookmark', BookmarkSchema);
export default Bookmark;
