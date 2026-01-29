import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDb from "./config/db.js"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.routes.js"

const app=express()
import http from "http"
const port=process.env.PORT || 5000
const server=http.createServer(app)




app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)
server.listen(port,()=>{
    connectDb()
    console.log(`server started at http://localhost:${port}`)
})