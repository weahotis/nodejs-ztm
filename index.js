const http = require('http');

const PORT = 8080
const server = http.createServer((req, res)=>{
    if(req.method === 'POST'){
        req.on('data', (data)=>{
            console.log(data)
            console.log("data")
        })
    }
    res.writeHead(200, {
        "content-type": "application/json",
    })
    res.end(JSON.stringify({
        name: "Otis Weah",
        nationality: "Liberian"
    }))
})

server.listen(PORT, ()=>{
    console.log(`server listening on ${PORT}`)
})