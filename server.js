import { app } from "./app.js"
import { HOST, PORT } from "./utils/config.js"
import http from "http"



const server = http.createServer(app)

server.listen(PORT, () => console.log(`🚀 THE SERVER IS UP AT: ${HOST}${PORT}`))