const express = require('express');
const app = express();

const port = 3000;


app.get('/username/:id', (req, res) => {
    let { id } = req.params;
    res.send(`User ID is ${id}`);
});


app.get('/search/:user/:id', (req, res) => {
    let { user, id } = req.params;
    res.send(`user: ${user}, id is ${id}`);
});

app.get('/search', (req, res) => {
    let { user, id } = req.query;
    res.send(`user: ${user}, id is ${id}`);
});


app.listen(port, () => {
    console.log(`the surver is running on http://localhost:${port}`)
})