import mongoose from "mongoose";


export const researchSchema = new mongoose.Schema({
    title : {
        type : String,
        default : "",
    }
})