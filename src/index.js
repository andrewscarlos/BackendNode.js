const express = require ('express')


git const cors = require('cors')


const server = express()
const PORT = process.env.PORT || 3001

server.use(express.json())
server.use(cors());

const TaskRoutes = require ('./routes/TaskRoutes')

server.use('/task', TaskRoutes )

server.get('/', (req, res)=>{
    return res.json({message: 'Deu Certo !!!!'})
})

server.listen(PORT, ()=>{
    console.log(`Serve is running on port ${PORT} !`)
})