import userModel from "./models/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookieParser from "cookie-parser"
const welcome = (req,res) =>{
    res.send("welcome to the website")
}

const register = async (req,res) => {

    try{
        let message
        const {email,name,mobile,password,role} = req.body
        const existingUser = await userModel.findOne({email})
        const phoneNumber = await userModel.findOne({mobile})
        if(phoneNumber || existingUser){
            let message
            if(phoneNumber){
                message = "phone number exists" 
            }else{
                message = "user already exists"
            }
            const pack = {
                "data" : {},
                "message" : message
            }
            console.log(pack)
            res.send(pack)
        }
        else{
            const encrypted =  await bcrypt.hash(password,3)
        const data = new userModel(
            {
                email : email,
                name : name,
                mobile : mobile,
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
        message = "user is successfully registered"
        const pack = {
            "data" : data,
            "message" : message
        }
           console.log(pack)
           res.send(pack)
        }
    
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
              res.send("user loggedin")
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