const express = require('express')
const router = express.Router()
const MessagesController  = require('../../../controllers/api/v1/messages')

// /api/v1/messages
router.get('/', MessagesController.getAll)

router.get('/:id', MessagesController.getOne)

router.post('/', MessagesController.createOne)

router.put('/:id', MessagesController.updateOne)

router.delete('/:id', MessagesController.removeOne)


module.exports = router