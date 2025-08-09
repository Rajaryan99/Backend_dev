const express = require('express');
const app = express();

const port = 5000;

app.get('/', (req, res) => {
    res.send(`Server is running on port ${port}`);
});

app.get('/hello', (req, res) => {
    res.send('Hello World');
});

// app.use(express.json());

app.post('/data', (req, res) => {
    const { name } = req.query;

    if (!name) {
        return res.status(400).send('Name is required');
    }

    res.send(`Hello ${name}`)
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})