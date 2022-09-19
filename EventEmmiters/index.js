const events = require('events')

const button = new events.EventEmitter()

// listen
button.on('click', ()=>{
    console.log('button clicked')
})

// emit , trigger , execute
button.emit('click')

button.on('dblClick',()=>{
    console.log('double clicked')
})

setTimeout(()=>{
    button.emit('dblClick')
},2000)