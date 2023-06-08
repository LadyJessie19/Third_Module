import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String, required: true, minLength: 3
    }, 
    email: {
        type: String, required: true, unique: true
    },
    tasks: [ { type: Schema.Types.ObjectId, ref: "Task" }]
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

export { User }