import express from'express';
import  mongoose from 'mongoose';
import { itemRoutes } from './routes/itemroutes.js';

const app = express();
app.use(express.json())
app.use('/',itemRoutes)

mongoose.connect('mongodb+srv://rakeshraj2097:Rakesh2097@reactdev.pct0kxk.mongodb.net/test').then(()=>console.log("db connected"));

app.listen(5050,()=>console.log("server started on 5050"))
