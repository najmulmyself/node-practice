const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.post('/', (req,res) => {
    console.log(req.body)
})

app.get('/', (req, res) =>{
    const friends = {
        name : 'John',
        salary : 300,
        id : 1,
    }
    res.send(friends)
})

app.listen(3001,()=>{
    console.log('listening on port 3001')
})