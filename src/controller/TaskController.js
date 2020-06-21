const TaskModel = require ('../model/TaskModel')
const { response } = require('express')
const {startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear} = require('date-fns')

const current = new Date()

class TaskController {  // essa classe possui todas as funcoes da pag Task

   async create(req, res){ // essa funcao ira criar uma nova Task
        const task = new TaskModel(req.body) // async serve para o node esperar a resposta da funcao sem executar outra coisa antes de chegar a resp dessa funcao
           await task
            .save() // sava as informacoes da req.body no mongo

            .then(response =>{
                return res.status(200).json(response)
            })

            .catch(error =>{
                return res.status(500).json(error)
            })
    }
    async update(req, res){
        await TaskModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true })
        .then(response =>{
            return res.status(200).json(response)
        })
        .catch(error =>{
            return res.status(500).json(response)
        })
    }
    async all(req, res){
        await TaskModel.find( { macaddress: {'$in': req.params.macaddress} } )
            .sort('when')
            .then(response =>{
                return res.status(200).json(response)
            })
            .catch(error =>{
                return res.status(500).json(error)
            })
    }
    async show (req, res){
        await TaskModel.findById(req.params.id)
        .then(response =>{
            if(response)
                return res.status(200).json(response)
            else
            return res.status(404).json({error: 'Tarefa nao encontrada'})
        })
        .catch(error =>{
            return res.status(500).json(error)
        })
    }
    async delete (req, res){
        await TaskModel .deleteOne({ '_id': req.params.id})
        .then(response =>{
            return res.status(200).json(response)
        })
        .catch(error =>{
            return res.status(500).json(error)
        })
    }
    async done (req, res){
        await TaskModel.findByIdAndUpdate(
            { '_id': req.params.id},
            {'done': req.params.done},
            {new: true})
        .then(response =>{
            return res.status(200).json(response)
        })
        .catch(error =>{
            return res.status(500).json(error)
        })
    }
    async late(req, res){
        await TaskModel
        .find({
        'when': {'$lt': current},
        'macaddress': {'$in': req.params.macaddress}
    })
    .sort('when')
    .then(response =>{
        return res.status(200).json(response)
    })
    .catch(error =>{
        return res.status(500).json(error)
    })

    }
    async today(req, res){
        await TaskModel
        .find({'macaddress': {'$in': req.params.macaddress},
        'when': {'$gte': startOfDay(current), '$lte': endOfDay(current)}
    })
        .sort('when')
        .then(response =>{
            return res.status(200).json(response)
        })
        .catch(error =>{
            return res.status(500).json(error)
        })
    }
    async week(req, res){
        await TaskModel
        .find({'macaddress': {'$in': req.params.macaddress},
        'when': {'$gte': startOfWeek(current), '$lte': endOfWeek(current)}
    })
        .sort('when')
        .then(response =>{
            return res.status(200).json(response)
        })
        .catch(error =>{
            return res.status(500).json({ 
                Mensagem: "Nao foi encontrado nenhuma tarefa !",
                 error: error
            })
        })
    }
    async month(req, res){
        await TaskModel
        .find({'macaddress': {'$in': req.params.macaddress},
        'when': {'$gte': startOfMonth(current), '$lte': endOfMonth(current)}
    })
        .sort('when')
        .then(response =>{
            return res.status(200).json(response)
        })
        .catch(error =>{
            return res.status(500).json({ 
                Mensagem: "Nao foi encontrado nenhuma tarefa !",
                 error: error
            })
        })
    }
    async year (req, res){
        await TaskModel
        .find({'macaddress': {'$in': req.params.macaddress},
        'when': {'$gte': startOfYear(current), '$lte': endOfYear(current)}
    })
        .sort('when')
        .then(response =>{
            return res.status(200).json(response)
        })
        .catch(error =>{
            return res.status(500).json({ 
                Mensagem: "Nao foi encontrado nenhuma tarefa !",
                 error: error
            })
        })
    }
    
}

module.exports = new TaskController();