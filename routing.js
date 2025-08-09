const express = require('express');
const app = express();

const port = 8080;

app.get('/about', (req, res) => {
    let about = `<h1>This is about page.</h1>`;
    res.send(about);
});

app.get('/:contact', (req, res) => {
    let contect = `<h1>Contact us at: rajaryan66@gmail.com</h1>`;
    res.send(contect);
});

app.use(express.json());

app.get('/:services', (req, res) => {
    let services = ["web Dev", 'App dev', 'IOS developer'];
    res.send(services);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})