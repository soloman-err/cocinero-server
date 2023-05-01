const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;


app.use(cors());

app.get('/', (req, res) => {
    res.send("Hey Genius! you're observing Cocinero");
})

app.listen(port, () => {
    console.log(`Cocinero listening on port: ${port}`);
})

