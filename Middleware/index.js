const express = require('express');
const app = express();

// 1st middleware
app.use(() => {
    console.log('I am a middleware');
});

app.get('/', (req, res) => {
    res.send('Hi, I am root')
});

app.get('/random', (req, res) => {
    res.send('This is a Random Page')
})

app.listen(8000, () => {
    console.log('Server is running at port 8000')
})