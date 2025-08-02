import mongoose from "mongoose"

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to the DB")
    } catch (error) {
        console.error("error connecting to the db", error.message);        
    }
}

export default connectDB;