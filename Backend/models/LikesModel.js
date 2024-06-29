
import mongoose from 'mongoose';

const LikeSchema = new mongoose.Schema({
  blogId: String, // The ID of the blog post from the RSS feed
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});
const Like = mongoose.model('Like', LikeSchema);
export default Like;