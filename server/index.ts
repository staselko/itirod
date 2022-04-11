import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import postRouter from './src/routes/post';
import userRouter from './src/routes/user';
import authRouter from './src/routes/index';
import commentRouter from './src/routes/comments';

dotenv.config();

const multer = require('multer');
const errorMiddleware = require('./src/middlewares/errors');

const upload = multer();
const MONGODB = 'mongodb+srv://staselko:staselya2002@cluster0.9oryx.mongodb.net/forum?retryWrites=true&w=majority';
const { PORT } = process.env;

const app = express();
dotenv.config();

app.use(upload.array());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  credentials: true,
  origin: process.env.FRONT_URL,
}));
app.use(cookieParser());
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);
app.use('/', authRouter);
app.listen(PORT);
mongoose.set('useFindAndModify', false);
mongoose.connect(MONGODB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('\x1b[32m', 'Successfully connected to the database'))
  .catch((err) => console.log('\x1b[31m', 'Could not connect to the database. Error...', err));

app.get('/', async (req, res) => {
  res.send(`Server is working on port ${PORT}`);
});

app.use(errorMiddleware);
