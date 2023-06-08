import mongoose, { Schema } from "mongoose";

/* 
title -> string[Required]
- content -> string[Required]
- status -> string[Required] Pendente, Fazendo, Concluido
- user -> ObjectId
*/

const taskSchema = new Schema({
    title: {type: String, required: true}, 
    content: {type: String, required: true},
    status: {type: String, enum: ["pendente", "fazendo", "concluido"], required: true}/* ,
    user: { type: Schema.Types.ObjectId, ref: "User" } */
}, { timestamps: true })

const Task = mongoose.model('Task', taskSchema)

export { Task }