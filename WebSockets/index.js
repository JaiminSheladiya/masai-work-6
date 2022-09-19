// WS (web socket) :-

const { WebSocketServer } = require('ws')

const wss = new WebSocketServer({
    // emits
    port : 8000,   // for browser :- ws://localhost:8000
})

wss.on('connection',(conn)=>{
    conn.on('message', (data)=>{
        console.log('Connection said : ' , data.toString('utf-8'))
    conn.send('Hello')
    })


    conn.send('Welcome user')
    console.log('a new client connected to server.')
})

wss.on('listening',()=>{
    console.log('WS server started')
})