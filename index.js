import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/kalij.js'
import userRoutes from './routes/users.js'
import aboutRoutes from './routes/about.js'
const app = express();

dotenv.config()
app.use(bodyParser.json({limit: '30mb', extended:true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended:true}))
app.use(cors())

app.use('/kalijs', postRoutes)
app.use('/user', userRoutes)
app.use('/about', aboutRoutes)
app.get('/', (req, res) => {
    res.send('Hello there')
  })


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => app.listen(PORT, console.log(`Server running ${PORT}`))).catch((error)=> console.log(error));