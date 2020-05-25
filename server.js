const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db.js');

const app = express();

const movieRouter = require('./routes/movie-router');
connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('API Running'));

app.use('/api', movieRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));