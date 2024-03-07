// create a express server 
const express = require('express');
const app = express();


const port = process.env.PORT || 3000;

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
