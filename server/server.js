
//express server
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// create a database connection

mongoose
.connect('mongodb+srv://jorgeespejoibacache:xjCBftYPdAXFXeyG@cluster0.cb3ur.mongodb.net/')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: 'http://localhost:5173/',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: [
            'Content-Type', 
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma',
        ],
        credentials: true,
    })
)

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));