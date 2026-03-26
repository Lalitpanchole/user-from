import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './DB.js'
import userRoutes from './routes/userRoutes.js'
dotenv.config()
const app = express();
app.use(cors());
app.use(express.json())
connectDB();
app.use("/api/user", userRoutes);
app.use("api/login", userRoutes);
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});
const PORT =  process.env.PORT || 5000;
app.listen(PORT, (req ,res)=>{
    console.log(`PORT runing  ${5000}`)
})
