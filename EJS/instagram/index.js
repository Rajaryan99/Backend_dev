const express = require('express');
const app = express();

const port = 3000;

app.get('/ig/:username', (req, res) => {
    let { username } = req.params;
    const instaData = require('./data.json');
    const data = instaData[username];
    console.log(data);
    res.render('home.ejs', { data });
});

app.listen(port, () => {
    console.log(`The server is running on http://localhost:${port}`)
})