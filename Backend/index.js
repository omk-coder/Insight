import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose';
import {BlogRoutes,WebBlogs,AiBlogs,Blockch, NewsRoutes, CombineBlog} from './Routes/index.js'

// import { notFound, ErrorHandler } from './Middleware/errorMiddleware.js';


dotenv.config();

const app = express();

app.use(express.json());

app.use(cors({
  origin: [process.env.CLIENT_URL],
  optionsSuccessStatus: 200
}));



//to use the custom routes in the route folder we use app.use

app.use("/", async( req, res) => {
  res.status(200).json("Hello There")
});

app.use('/blogs', BlogRoutes)
app.use('/webdev', WebBlogs)
app.use('/AI', AiBlogs)
app.use('/BlockChain',Blockch)
app.use('/api/news',NewsRoutes)
app.use('/Cmb',CombineBlog)
// app.use(notFound)
// app.use(ErrorHandler)


// middleware and handling errors
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    error: message,
    statusCode,
  });
});

const Port = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() =>
    app.listen(Port, () => {
      console.log(`Connected to ${Port}`);
    })
  )
  .catch((err) => console.log(err));


export default app; 
