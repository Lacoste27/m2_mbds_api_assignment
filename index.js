// create a express server 
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const environment = require('dotenv');
environment.config(); 

const app = express();

const authentificationRouter = require('./app/routes/authentification.route');
const userRouter = require('./app/routes/user.route');
const assignmentRouter = require('./app/routes/assignment.route');

const uri = (process.env.ENVIRONMENT === 'dev') ? 'mongodb://localhost:27017/assignment' : process.env.MONGODB_URI;

mongoose.connect(uri)
        .then(() => { console.log(`Connecté à la base MongoDB assignments à ${uri}`)},
        err => { console.log('Erreur de connexion: ', err) });

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/authentification", authentificationRouter);
app.use("/api/users", userRouter);
app.use("/api/assignments", assignmentRouter);


app.get('/api', (req, res) => {
    res.json({
        message: 'Hello from the server api assignments'
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});