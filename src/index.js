const express = require ('express')

const cors = require('cors')


const server = express()
const PORT = process.env.PORT || 3001

server.use(express.json())
server.use(cors());

const TaskRoutes = require ('./routes/TaskRoutes')

server.use('/task', TaskRoutes )



server.listen(PORT, ()=>{
    console.log(`Serve is running on port ${PORT} !`)
})