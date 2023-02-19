import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

const URI = process.env.URI
const connection = () =>{
    mongoose.set('strictQuery', false);
    mongoose.connect(URI).then(()=>{
         console.log("db connected")
    }).catch(error =>{
         console.log("ERROR MESSAGE :-  \n"+error)
    })

}


export default connection;