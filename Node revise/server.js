const cluster = require('cluster')
const os = require('os')

const express = require('express')
const port = 9090

const totalCpus = os.cpus().length 

    // If I am the master process  
if(cluster.isPrimary){ 
    console.log('ran by primary process')
    for(let i = 0 ; i< totalCpus;i++){
        cluster.fork()
    }
}
else{
    // Slave / secondary
    // console.log('ran by worker process')

const app = express()

app.get('/', (req, res) => {
    res.send('hello')
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

}
