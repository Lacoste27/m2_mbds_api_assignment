// create a express server 
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const environment = require('dotenv');
const router = require('./app/routes/user.route');
environment.config(); 

const app = express();
const authentificationRouter = require('./app/routes/authentification.route');

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/assignments';

mongoose.connect(uri)
    .then(() => {
        console.log(`Connecté à la base MongoDB assignments à ${uri}`);
    },
        err => {
            console.log('Erreur de connexion: ', err);
        });

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/authentification", authentificationRouter);

// create a route to get the data
app.get('/api', (req, res) => {
    res.json({
        message: 'Hello from the server api'
    });
});

// start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});