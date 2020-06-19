const TaskModel = require ('../model/TaskModel')

class TaskController {  // essa classe possui todas as funcoes da pag Task

   async create(req, res){ // essa funcao ira criar uma nova Task
        const task = new TaskModel(req.body) // async serve para o node esperar a resposta da funcao sem executar outra coisa antes de chegar a resp dessa funcao
           await task
            .save() // sava as informacoes da req.body no mongo
            .then(res =>{
                return res.status(200).json(res)
            })// se tudo der certo, blz!
            .catch(error =>{
                return res.status(500).json(error)
            })// se tudo der errado, retorna o catch !
    }

    async 
}

module.exports = new TaskController();