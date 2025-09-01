const express = require('express');
const app = express();

// 1st middleware and next();
app.use((req, res, next) => {
    console.log('I am a middleware'); // for every signle request it will send this 
    next();
});

app.use((req, res, next) => {
    console.log('I am a 2nd middleware'); // for every signle request it will send this 
    next();
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