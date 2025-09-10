import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('server is ready')
});

app.get('/hello', (req, res) => {
    let hello = [
        {
            name: 'Raj',
            greet: "hello"
        },

         {
            name: 'vis',
            greet: "hello"
        },

         {
            name: 'nik',
            greet: "hello"
        },
    ]

    res.render()
})



app.listen(process.env.PORT ||  3000, () => {
    console.log('server is running on http://localhost:3000');
});