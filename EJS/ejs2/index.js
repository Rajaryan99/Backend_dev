const express = require('express');
const app = express();
const path = require('path');

const port = 5000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home.ejs');
});



app.get('/ig/:username', (req, res) => {
    const followers = ['raj', 'sakhsi', 'batu', 'vishal', 'nikhil']
    let { username } = req.params;
    res.render('home.ejs', { username, followers })
})

app.get('/diceroll', (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render('dice.ejs', { diceVal });
})



app.get('/:bin', (req, res) => {
    res.send("Bin directory");
});

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
})