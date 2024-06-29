import express from 'express'
import {RegisterUsers, userLogin, userlogout} from '../Controllers/usersController.js'


const router = express.Router();

router.post('/register', RegisterUsers);
router.post('/login', userLogin)
router.post('/logout', userlogout)

export default router