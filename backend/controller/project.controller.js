import { Project } from "../schema/project.js";
import { Chat } from "../schema/chat.js";
import { generateChat } from "../utils/model_ollama.js";

export const createProject = async (req,res) => {
    try {

        const {title} = req.body;
        const project = await Project.create({title, userId : "1"})

        let intialMessage = {
            role : 'user',
            content : title
        }

        let response = await generateChat([intialMessage])

        let saveChat = await Chat.create({
            projectId : project._id,
            question : title,
            answer : response,
            position : {x : 0, y : 0},
            connectionId : []
        })

        console.log(saveChat,'save chat for the application')

        return res.status(200).json({
            success : true,
            message : "Project created successfully",
            project
        })

    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "Internal Server Error",
            error : error.message
        })
    }
}

export const chatProject = async (req,res) => {
    try {
       
        // const {projectId, question, nodeId, connectionId} = req.body;

        // let response = await generateChat([{role : 'user', content : question}])
        
        // const chat = await Chat.create({
        //     projectId,
        //     question,
        //     answer : response,
        //     position : {x : 0, y : 0},
        //     connectionId : connectionId
        // })

        // return res.status(200).json({

    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "Internal Server Error",
            error : error.message
        })
    }
}

export const getFullChat = async (req,res) => {
    try {
        const {projectId} = req.params;
        const chat = await Chat.find({projectId}).sort({createdAt : -1})

        return res.status(200).json({
            success : true,
            message : "Chat fetched successfully",
            chat
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "Internal Server Error",
            error : error.message
        })
    }
}