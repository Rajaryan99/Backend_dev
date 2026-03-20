import express from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const app = express()

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send("hello World!!!!")
})

app.listen(port, () => {
    console.log(`server  is running on http://localhost:${port}`)
})

