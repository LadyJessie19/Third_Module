import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String, required: true, minLength: 3
    }, 
    email: {
        type: String, required: true, unique: true
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

export { User }