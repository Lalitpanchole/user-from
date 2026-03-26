import mongoose from "mongoose";
export const connectDB = async()=>{
    try {
            const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb Connect Successfull", ${conn.connection.host}`)
    } catch (error) {
        console.log("Mongodb faileds", console.error)
           process.exit(1);
    }
 
}
export default connectDB;