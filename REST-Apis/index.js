const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    {
        username: 'rajaryan',
        content: "i love coding! i will become Software engineer in big MNC's like Google, Microsoft, Amazon ect."
    },
    {
        username: 'nik_sh',
        content: "i hate coding! i love 'laal Batti' i am going for governemnt exam SSC."
    },
    {
        username: 'vis_sh',
        content: "i love finance, and persuing MBA form NFSU GandhiNagar (gujrat)"
    },
]

app.get('/posts', (req, res) => {
    res.render('index.ejs', { posts })
})



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})