const express = require('express');
const app = express();

const port = 8080;

// app.get('/', (req, res) => {
//     res.send("hello world");

// });

// app.get('/:username', (req, res) => {
//     console.log(req.params);
// })

app.get('/search', (req, res) => {
    let { q } = req.query;
    res.send(`the result for query: ${q}`);
})

app.listen(port, () => {
    console.log(`The Server is running on HTTP://localhost:${8080}`);
});
