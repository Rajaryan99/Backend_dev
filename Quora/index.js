const express = require('express');
const app = express();
const path = require('path');

const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username: 'rajaryan',
        content: 'i love coding, wants to become a software developer',
    },

    {
        username: 'nik_sh',
        content: 'i hate coding, government job SSC',
    },

    {
        username: 'Vis_sh',
        content: 'i love finance, currently pursuing MBA form NFSU',
    },
];

app.get('/posts', (req, res) => {
    res.render('index', { posts })
});


app.get('/posts/new', (req, res) => {
    res.render('new');
});

app.post('/posts', (req, res) => {
    let { username, content } = req.body;
    posts.push({ username, content });
    res.redirect('/posts',)

})




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})