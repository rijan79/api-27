const http = require("http")
const httpserver = http.createServer() // server application loader

//0-65535 `100 well defined ports 
// 21, 25, 80, 22, 443, 27017, 5432, 6000, not use ports
// ipv4- 127.0.0.1. ipv6- ::1
httpserver.listen(8000, '127.0.0.1',(err) => {
    if(!err){
        console.log("server 8000 is on the go")
    }
}) 