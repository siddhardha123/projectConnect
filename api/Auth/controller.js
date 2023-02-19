import userModel from "./models/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookieParser from "cookie-parser"
const welcome = (req,res) =>{
    res.send("welcome to the website")
}

const register = async (req,res) => {

    try{
        const {email,name,phone,password,role} = req.body
        const existingUser = await userModel.findOne({email})
        const phoneNumber = await userModel.findOne({phone})
        if(existingUser){
            res.send("user already exists")
        }
        if(phoneNumber){
            res.send("number is registered with another account")
        }
        const encrypted =  await bcrypt.hash(password,3)
        const data = new userModel(
            {
                email : email,
                name : name,
                phone : phone,
                password : encrypted,
                role : role,
            }
        )
        await data.save()
        const token = jwt.sign(
            {id :data._id,email},   
            'hello',
            {
                expiresIn: "3h"
            }
        )
        data.token = token
        data.password = undefined
        console.log(data)
        res.send("user successfully registered")

    }catch(err){
        console.log(err)
    }

}


const login = async (req,res) =>{
     try{
          
        const {email,password} = req.body
        if(!(email && password)){
            res.send("fields are missing")
        }
       const user =  await userModel.findOne({email})
       if(!user){
        res.send("user doesnt exist")
       }
       if(user && ( await bcrypt.compare(password,user.password)))
       {
            const token = jwt.sign(
                {id:user.id},
                "hello",
                {
                    expiresIn : "3h"
                }
             )
             user.token = token
             const options = {
                expires : new Date(Date.now()+3*24*60*60*1000),
                httpOnly : true
           }
        //    res.cookie("token",token,options)
          return  res.send("user loggedin")
       }else{
                res.send("wrong password")
       }

       

       
      
     }catch(err){
        console.log(err)
     }
}
export default {
    welcome,
    register,
    login,
}