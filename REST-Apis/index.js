const express = require('express');
const app = express();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');


const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    {
        id: uuidv4(),
        username: 'rajaryan',
        content: "i love coding! i will become Software engineer in big MNC's like Google, Microsoft, Amazon ect."
    },
    {
        id: uuidv4(),
        username: 'nik_sh',
        content: "i hate coding! i love 'laal Batti' i am going for governemnt exam SSC."
    },
    {
        id: uuidv4(),
        username: 'vis_sh',
        content: "i love finance, and persuing MBA form NFSU GandhiNagar (gujrat)"
    },
]

app.get('/posts', (req, res) => {
    res.render('index.ejs', { posts })
});

app.get('/posts/new', (req, res) => {
    res.render('new.ejs');
});

app.post('/posts', (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content })
    res.redirect('/posts')
});

app.get('/posts/:id', (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    if (!post) {
        return res.status(404).send('post not found')
    }
    res.render('show.ejs', { post });
});

app.patch('/posts/:id', (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect('/posts');
});

app.get('/posts/:id/edit', (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render('edit.ejs', { post });
})


app.delete('/posts/:id', (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect('/posts');
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})