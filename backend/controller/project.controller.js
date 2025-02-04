import { Project } from "../schema/project";

export const createProject = async(req,res) => {
    try {
        const {title} = req.body;
        const project = await Project.create({title, userId : "1"})
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

export const getProjects = async(req,res) => {
    try {
        const projects = await Project.find({userId : "1"})
        return res.status(200).json({
            success : true,
            message : "Projects fetched successfully",
            projects
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "Internal Server Error",
            error : error.message
        })
    }
}