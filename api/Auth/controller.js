import userModel from "./models/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const welcome = (req,res) =>{
    res.send("welcome to the website")
}

const register = async (req,res) => {
    const {email,name,mobile,password,role} = req.body
    try{  
          // Check if user with the same email already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email is already in use' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document
    const user = new userModel({ name, email, password: hashedPassword,mobile,role });
    await user.save();

    // Create a JWT token for the new user
    const token = jwt.sign({ email: user.email }, 'blahblah', {
      expiresIn: '1h',
    });

    // Respond with the token
    user.password = undefined
    const data = {name,email,role,token}
    res.send(data);
    
    }catch(err){
        console.log(err)
    }

}


const login = async (req,res) =>{
     try{
          
        const { email, password } = req.body;

        // Validate inputs
        if (!email || !password) {
          return res.status(400).json({ message: 'Please provide email and password' });
        }
      
        // Find user
        const user = await userModel.findOne({ email });
      
        if (!user) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
      
        // Compare passwords
        const isPasswordMatch = await bcrypt.compare(password, user.password);
      
        if (!isPasswordMatch) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
      
        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, 'secret');
      
        res.status(200).json({ token });
      
     }catch(err){
        console.log(err)
     }
}

export default {
    welcome,
    register,
    login,
}