import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import path from 'path';

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI!).then(() => console.log("Connected To DB")).catch(e => console.log(e))

// Express middleware
app.set('view engine', 'pug')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, '../public')))



const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server listening on port " + PORT)
})