import express from "express"
// Import auth controller functions
import { googleAuth,resetPassword, sendOtp, signIn, signOut, signUp ,verifyOtp} from "../controllers/auth.controllers.js"

const authRouter=express.Router()

// Route for user registration (signup)
authRouter.post("/signup",signUp)

// Route for user login (signin)
authRouter.post("/signin",signIn)

// Route for user logout (signout)
authRouter.get("/signout",signOut)

authRouter.post("/send-otp",sendOtp)
authRouter.post("/verify-otp",verifyOtp)
authRouter.post("/reset-password",resetPassword)
authRouter.post("/google-auth",googleAuth)
export default authRouter