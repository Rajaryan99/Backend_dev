const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, 'public')))


app.get('/ig/:username', (req, res) => {
    let { username } = req.params;
    let instadata = require('./data.json');
    let data = instadata[username]
    console.log(data);

    res.render('home.ejs', { data });
})

app.get('/rolldice', (req, res) => {
    let dicecal = Math.floor(Math.random() * 6) + 1;
    res.render('diceroll.ejs', { dicecal });
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})