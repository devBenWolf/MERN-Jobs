import express from "express"
const app = express()
import dotenv from "dotenv"
import "express-async-errors"
dotenv.config()

// Middleware imports
import notFound from "./middleware/not-found.js"
import errorHandler from "./middleware/error-handler.js"

// router import
import authRouter from "./routes/authRoutes.js"
import jobsRouter from "./routes/jobsRoutes.js"

// DB Connection import 
import connectDB from "./db/connect.js"

app.use(express.json())

app.get(`/`, (req, res) => {
    res.send(`Hello!`)
})

// routers
app.use(`/api/v1/auth`, authRouter)
app.use(`/api/v1/jobs`, jobsRouter)

// middleware
app.use(notFound)
app.use(errorHandler)

const port  = process.env.PORT

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server running on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()



console.log(`server is running hello`)