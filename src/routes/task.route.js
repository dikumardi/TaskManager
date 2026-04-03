const express = require('express');
const taskController = require('../controller/task.controller');


const router = express.Router()

router.post('/create',taskController.createUserController)
router.get('/gets',taskController.getsUserController)


module.exports = router