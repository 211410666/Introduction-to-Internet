import express from "express";
import logger from "morgan";
import dotenv from "dotenv";
dotenv.config();
import apiRouter from './routes/apiSUPA.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(logger('dev'));
app.use(express.static('public'));
app.set('view engine','ejs');

app.use(cors());
app.use('/apiTopic',apiRouter);

const port = process.env.PORT || 5000;

app.listen(port,()=>{
  console.log(`Connecting by Router`);
})