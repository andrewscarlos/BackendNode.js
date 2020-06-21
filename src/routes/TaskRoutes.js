const express = require('express')
const router = express.Router()

const TaskController = require('../controller/TaskController')
const TaskValidation = require('../middlewares/TaskValidation')


//ROTAS POST
router.post('/', TaskValidation, TaskController.create)

//ROTAS DELETE
router.delete('/:id', TaskController.delete)

//ROTAS DE ATUALIZAÇAO
router.put('/:id/:done', TaskController.done)
router.put('/:id', TaskValidation, TaskController.update)

//ROTAS DE BUSCA
router.get('/:id', TaskController.show)
router.get('/filter/all/:macaddress', TaskController.all)
router.get('/filter/late/:macaddress', TaskController.late)
router.get('/filter/today/:macaddress', TaskController.today)
router.get('/filter/week/:macaddress', TaskController.week)
router.get('/filter/month/:macaddress', TaskController.month)
router.get('/filter/year/:macaddress', TaskController.year)

module.exports = router