import express from "express";
import { createProject } from "../controller/project.controller.js";

const router = express.Router();

router.post('/create_project', createProject)
// router.get('/get_projects', getProjects)

export default router;  