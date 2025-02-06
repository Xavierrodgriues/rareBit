import { Project } from "../schema/project.js";
import { Chat } from "../schema/chat.js";
import { generateChat } from "../utils/model_ollama.js";
import { response } from "../utils/response.js";

export const createProject = async (req,res) => {
    try {

        const {title} = req.body;

        const project = await Project.create({title, userId : "1"})
        console.log(project,'project created successfully')

        return response(res,200,"Project created successfully",project)

    } catch (error) {
        console.log(error)
        return response(res,500,"Internal Server Error",error.message)  
    }
}

export const chatProject = async (req,res) => {
    try {
       
        const {projectId, messages,question, nodeId, connectionId, position} = req.body;
        
        messages.push({role : "user", content : question})
        
        console.log({messages},'messages')

        const dataRes = await generateChat(messages)

        console.log({dataRes},'dataRes')

        const chat = await Chat.create({
            projectId,
            question : question,
            answer : dataRes,
            position : position,
            nodeId : nodeId,
            connectionId : connectionId
        })
        console.log(chat,'chat created successfully')
        
        return response(res,200,"Chat created successfully",chat)

    } catch (error) {
        console.log(error)
        return response(res,500,"Internal Server Error",error.message)
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