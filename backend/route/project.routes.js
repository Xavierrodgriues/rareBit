import express from "express";
import { chatProject, createProject } from "../controller/project.controller.js";

const router = express.Router();

router.post('/create_project', createProject)
router.post('/chat', chatProject)

export default router;  