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
        phone : {
            type : Number,
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