const express = require ('express')


const cors = require('cors')


const server = express()
const PORT = 80

server.use(express.json())
server.use(cors());

const TaskRoutes = require ('./routes/TaskRoutes')

server.use('/task', TaskRoutes )

server.get('/', (req, res)=>{
    return res.json({message: 'Deu Certo porta 80'})
})

server.listen(PORT, ()=>{
    console.log(`Serve is running on port ${PORT} !`)
})