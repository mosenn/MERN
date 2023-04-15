const router= require('express').Router()

const {conTest} = require('../controller/conTest')


router.get("/", conTest);

module.exports = router