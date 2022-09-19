const http = require("http");
const { Server } = require("socket.io");
const fs = require("fs");

const httpServer = http.createServer((req, res) => {
  const index = fs.readFileSync(__dirname + "/index.html", "utf-8");
  res.end(index);
});

const wss = new Server(httpServer);

let totalUsers = 0;
let uniqueId = 0
// const history = [];
const users = []

wss.on("connection", (conn) => {
    const user = {}
  totalUsers++
//   conn.on('disconnect' , ()=>{
//     totalUsers--
//     console.log(`a  user disconnected , total users : ${totalUsers}`);
//   })

conn.broadcast.emit('joined') //will be give message to all other connections expcept own connection 


  conn.on('new message' , (message)=>{
    // console.log('client said - ', message);
    // history.push(message)
    wss.emit('new message' ,message)
  })
  conn.on('new user' , (username)=>{
    uniqueId++
    const user = {
        id : uniqueId,
        username : username,
    }
    users.push(user)
  })
//   conn.emit('history' , history)
    console.log(`a new user connected , total users : ${totalUsers}`);
});


httpServer.listen(8080);
