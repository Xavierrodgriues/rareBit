import express from "express";
const app = express();
import { WebSocketServer } from "ws";
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
import projectRouter from "./route/project.routes.js"

app.use('/api/v1', projectRouter)

const wss = new WebSocketServer({ noServer: true })

wss.on('connection', (ws) => {
  console.log('Client connected')
})

wss.on('error', (error) => {
  console.error('WebSocket server error:', error)
})


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

