const express = require('express');
const app = express();

const port = 8080;

app.get('/search', (req, res) => {
    let { name, username, id } = req.query;
    res.send(`Name: ${name},  username: @${username},ID:${id}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});