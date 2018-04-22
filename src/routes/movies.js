const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/movies')

router.get('/', ctrl.getAll)
router.post('/', ctrl.create)
router.get('/:id', ctrl.getById)
router.put('/:id', ctrl.update)
router.delete('/:id', ctrl.deleteById)

module.exports = router;
