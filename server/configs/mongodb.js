
import mongoose from "mongoose";
const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log("Database Connected_!"));
    await mongoose.connect(`${process.env.MONGODB_URI}/lms_learning`)
}
export default connectDB;