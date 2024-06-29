import express from 'express';
import Comment from '../models/CommentModel.js'
import auth from '../Middleware/authentication.js'
// /Comm

const router =  express.Router();

//endpoint to add the comment into the database
router.post('/:blogId/comments', auth, async(req,res ) => {
    const {user, content} = req.body;
    try{
        const comment  = new Comment({ blogId: req.params.blogId, user, content})
        await comment.save();

    }catch(error){
        console.error('Error adding comment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
    }
})

//creating the endpoint to view the comment in frontend side
router.get('/:blogId/comments', async( req, res)=> {                    //basically we didnt use auth here cause we want other to see our comments
    try{
        const comments  = await Comment.find({ blogId: req.params.blogId})
        res.json(comments)

    }catch(error){
        console.error('Error fetching comments:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

export default router;