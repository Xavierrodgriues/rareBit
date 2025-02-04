import mongoose from "mongoose";


const chatSchema = new mongoose.Schema({
    projectId : {
        type : mongoose.Schema.type.ObjectId,
        ref : "Project",
    },
    question : {
        type : String,
        default : "",
    },
    answer : {
        type : String,
        default : "",
    },
    position : {
        type : {
            x : Number,
            y : Number,
        },
    },
    connectionId : [mongoose.Schema.type.ObectId],
},{timestamps : true})

export const Chat = mongoose.model("Chat", chatSchema)