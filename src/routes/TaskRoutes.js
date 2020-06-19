const express = require ('express')
const router = express.Router()
const TaskController = require('../controller/TaskController')

router.post('/', TaskController.create)

module.export = router