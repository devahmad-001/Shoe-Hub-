import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require:false
    },
    ph:{
        require:false,
        type:Number,
    }
})

export const UserModel= mongoose.models.profiles || mongoose.model('profiles',UserSchema)