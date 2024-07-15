import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require:true
    }
})

export const UserModel= mongoose.models.profiles || mongoose.model('profiles',UserSchema)