
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/mongodb.js';
import { clerkWebhooks } from './controllers/webhooks';

//Initialize 
const app = express();
await connectDB();

//middlewear
app.use(cors());

//rout
app.get('/', (req, res) => res.send("API is Working"));
app.post("/clerk", express.json(), clerkWebhooks);

//port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})