import express from "express";
import { fetchallNews } from "../Controllers/allnews.js";

const router = express.Router();
router.get('/', fetchallNews)

 
export default router