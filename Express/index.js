const express = require('express');
const app = express();

const port = 8080;

app.listen(port, () => {
    console.log(`App is listning on Port ${port}`);
});


// app.use((req, res) => {
//     console.log("Request Receved")
// })


app.get('/', (req, res) => {
    res.send('Root Path');
})

app.get("/help", (req, res) => {
    res.send('help path chnaged');
})

app.get('/apple store', (req, res) => {
    res.send('apple store path');
})

