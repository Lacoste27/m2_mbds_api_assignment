// create a express server 
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const environment = require('dotenv');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

environment.config(); 

const app = express();


const options = {
  swaggerDefinition: {
    info: {
      title: 'Assignment API',
      version: '1.0.0',
      description: 'Description de votre API',
    },
    servers: [
      {
        url: 'https://m2-mbds-api-assignment.onrender.com', // Remplacez par l'URL de votre serveur
        description: 'Serveur production',
      },
    ],
  },
  apis: ['./app/routes/*.js'], // Chemin vers vos fichiers de routes
};

const swaggerSpec = swaggerJsdoc(options);

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
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/api', (req, res) => {
    res.json({
        message: 'Hello from the server api assignments'
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});