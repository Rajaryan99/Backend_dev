import express from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import mongoose from 'mongoose'

const app = express()

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send("hello World!!!!")
})


const connectDB =  async () => {

    try {

        await mongoose.connect(process.env.MONGODB_URL)
        console.log('DB Connected successfully!!')

        app.listen(port, () => {
            console.log(`server  is running on http://localhost:${port}`)
        })

        
    } catch (error) {
        console.error("DB connection error", error)
    }
}

connectDB();


