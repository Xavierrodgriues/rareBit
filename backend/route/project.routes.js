import express from "express";
import { createProject, getProjects } from "../controller/project.controller";

const router = express.Router();

router.post('/create_project', createProject)
router.get('/get_projects', getProjects)

export default router;  