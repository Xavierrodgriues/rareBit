import { Project } from "../schema/project";
import { Chat } from "../schema/chat";
import { generateChat } from "../utils/model_ollama";

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
        const {projectId, question, nodeId} = req.body;
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "Internal Server Error",
            error : error.message
        })
    }
}