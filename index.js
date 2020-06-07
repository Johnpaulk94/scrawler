const express = require('express')
const cors = require('cors')
const setUpDB = require('./config/database')
const router = require('./config/routes')
const port = 3015
const app=express()

app.use(express.json())
app.use(cors())
setUpDB()

app.use('/',router)


app.listen(port,()=> {
    console.log('listening on port', port)
})

