const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

// server data:
const featured = require('./data/featured-dishes.json');
const chef = require('./data/chef-data.json');

// cors:
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hey Genius! you're observing Cocinero");
})

app.get('/featured', (req, res) => {
    res.send(featured);
})

app.get('/chef', (req, res) => {
    res.send(chef);
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const chefData = chef.find(data => data.id == id);
    res.send(chefData)
})

app.listen(port, () => {
    console.log(`Cocinero listening on port: ${port}`);
})

