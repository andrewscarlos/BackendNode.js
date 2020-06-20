const express = require ('express')
const router = express.Router()

const TaskController = require('../controller/TaskController')
const TaskValidation = require ('../middlewares/TaskValidation')
const TaskValidationMacAddress = require ('../middlewares/MacaddressValidation')

router.post('/', TaskValidation , TaskController.create)
router.put('/:id', TaskValidation, TaskController.update)
router.get('/filter/all', TaskValidationMacAddress,  TaskController.all )
router.get('/:id', TaskController.show)
router.delete('/:id', TaskController.delete)
router.put('/:id/:done', TaskController.done)
router.get('/filter/late', TaskValidationMacAddress, TaskController.late)
router.get('/filter/today', TaskValidationMacAddress, TaskController.today)

module.exports = router