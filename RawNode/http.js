const http = require('http')

const server = http.createServer((req,res)=>{
    res.end('<h1>Hello World from the world of Node</h1>')
})

server.listen(1000,()=> console.log('Server is Listening to 1000'))
 