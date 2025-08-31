const express = require('express');
const app = express();

// 1st middleware
app.use(() => {
    console.log('I am a middleware');
});

app.listen(8000, () => {
    console.log('Server is running at port 8000')
})