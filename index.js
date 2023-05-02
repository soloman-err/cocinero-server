const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

// server data:
const featured = require('./data/featured-dishes.json');

// cors:
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hey Genius! you're observing Cocinero");
})

app.get('/featured', (req, res) => {
    res.send(featured);
})

app.listen(port, () => {
    console.log(`Cocinero listening on port: ${port}`);
})

