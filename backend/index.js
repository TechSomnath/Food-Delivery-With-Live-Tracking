import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDb from "./config/db.js"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.routes.js"
import cors from "cors"
import userRouter from "./routes/user.routes.js"

const app=express()
import http from "http"
const port=process.env.PORT || 5000
const server=http.createServer(app)

/* ---------- CORS Configuration ---------- */
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
/* ---------- Middlewares ---------- */
app.use(express.json())
app.use(cookieParser())


/* ---------- Routes ---------- */
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)


/* ---------- Server Start ---------- */
server.listen(port,()=>{
    connectDb()
    console.log(`server started at http://localhost:${port}`)
})