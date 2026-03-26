import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './DB.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// DB connect
connectDB();

// ✅ yaha main change
app.use("/", userRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`PORT running ${PORT}`);
});
