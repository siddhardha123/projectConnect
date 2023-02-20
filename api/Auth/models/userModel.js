import mongoose from "mongoose"

const registerSchema = mongoose.Schema(
    {
        email : {
            type : String,
            required:true,
        },
        name : {
            type:String,

        },
        mobile : {
            type :String,
        },
        password : {
            type : String,
        },
        role : {
            type : String,
        }
    }
)
const userModel = mongoose.model('user',registerSchema);

export default userModel