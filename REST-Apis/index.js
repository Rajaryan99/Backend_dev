const express = require('express');
const app = express();
const path = require('path');

const port = 5000;

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

//local Database

let posts = [
    {
        username: "rajryan",
        content: "I love coding",
    },

    {
        username: "Aman_gupta",
        content: "Hard Working is the key to successs",
    },

    {
        username: "vis_sh",
        content: "Doing MBA form NFSU",
    },

];

app.get('/posts', (req, res) => {
    res.render('index.ejs', { posts });
})

app.listen(port, () => {
    console.log(`Server is running on http//:localhost:${port}`);

})
