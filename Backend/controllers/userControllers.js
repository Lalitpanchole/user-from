import User from "../models/User.js"
import bcrypt from 'bcryptjs'
// sign
export const createUser = async(req, res)=>{
  try {
    const {name, email, password} = req.body;
    if(!name || !email || !password){
      return res.status(400).json({message: "All fields required"});
    }
    const exits = await User.findOne({email});
    if(exits){
     return res.status(409).json({message: "Already email exits"});
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password,salt)
    const user = await User.create({
        name,
        email,
        password:hashPassword
    })
     return res.status(200).json({
        message: "Created user now",
        user
     });
  } catch
   (error) {
    return res.status(500).json({message: error.message})
  }
}
// login
export const loginUser = async(req, res)=>{
    try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({message: "all required fields"})
        }

        const user = await User.findOne({email});

        if(!user){
            return res.status(404).json({message: "Not found"})
        }
        
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({message: "Invalid password"})
        }

        return res.status(200).json({
            message: "Login successful",
            success: true,
            user:{
                id: user._id,
                email: user.email
            }
        });

    } catch (error) {
        console.log(error); // 👈 debugging ke liye
        return res.status(500).json({message: error.message})
    }
}
