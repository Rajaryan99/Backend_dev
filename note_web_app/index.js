const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, "public")));



app.get('/', (req, res) => {
    fs.readdir('./files', function (err, files) {
        if (err) {
            console.log('Error 404 File not found')
        } else {
            console.log(files)

            res.render('index', { files });
        }
    })

})

app.post('/create', (req, res) => {
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function (err) {
        res.redirect('/');
    })
})

app.get('/see', (req, res) => {
    let { title, content } = req.query
    res.render('see', { title, content })
})

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
})