import mongoose from "mongoose";


export const projectSchema = new mongoose.Schema({
    title : {
        type : String,
        default : "",
    },
    userId : {
        type : String,
        default : "1"
    }
})

export const Project = mongoose.model("Project", projectSchema)