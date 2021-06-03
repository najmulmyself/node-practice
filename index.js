const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.send('<h1>Thanks For Sign In , We are Pleased</h1>')
})

app.listen(3001,()=>{
    console.log('listening on port 3001')
})