import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"
import classificationRoutes from "./routes/classficatioRoute.js"

const app = express()


dotenv.config()
app.use(cors())

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000

connectDB()

//root routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/classification", classificationRoutes)


app.listen(PORT , () => {
    console.log(`the server is running at the port ${PORT}`);    
})