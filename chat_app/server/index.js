const express = require('express')
const cors = require('cors')
const testRouter = require('./routes/test')

const app = express();
app.use(cors())
//*doTEnv
require('dotenv').config({path:"./config/config.env"})
//*Routers
app.use('/' , testRouter)
//*Listen
const port = process.env.PORT || 3010
app.listen(port ,()=> {
console.log(`sv is runing at ${port}`)
})