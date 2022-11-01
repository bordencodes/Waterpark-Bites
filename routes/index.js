const { Router } = require('express')
const { appendFile } = require('fs')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))
module.exports = router
