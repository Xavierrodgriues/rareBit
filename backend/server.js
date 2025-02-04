import express from "express";
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
import projectRouter from "./route/project.routes.js"

app.use('/api/v1', projectRouter)

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
