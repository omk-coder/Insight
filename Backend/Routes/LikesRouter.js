import express from 'express'
import Likes from '../models/LikesModel.js'
import auth from '../Middleware/authentication.js'
 // /like at first
const router = express.Router()

router.post('/:blogId/likes', auth, async(req,res)=> {
    const {user} = req.body
    try{
        const like = new Likes({blogId:req.params.blogId, user})
    await like.save()
    res.status(200).json(like)
    }catch(error){
        console.error('Error adding like:', error);
    res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.get('./:blogId/likes', async(req,res)=> {
    try{
        const likes = await Likes.find({blogId:req.params.blogId}).populate('user', 'username');
        res.json(likes)

    }catch(error){
        console.error('Error fetching likes:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.get('/user/likes', auth, async (req, res) => {
    try {
      const likes = await Likes.find({ user: req.user.userId }).populate('blogId');
      res.json(likes);
    } catch (error) {
      console.error('Error fetching user likes:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

export default router;