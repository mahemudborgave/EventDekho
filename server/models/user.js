import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name : {
        type:String,
        required: true,
        trim: true,
    },
    email : {
        type:String,
        required: true,
        trim: true,
        unique: true,
    },
    role : {
        type:String,
        required: true,
        trim: true,
    },
    password : {
        type:String,
        required: true,
        minlength: 6,
    }    
},
{ timestamps: true })


const User = mongoose.model('User', UserSchema);
export default User;