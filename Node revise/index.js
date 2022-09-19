const express = require('express')
const app = express()
const port = 9090

app.get('/', (req, res) => {
    // const data = fs.readFileSync('./data.txt','utf-8')
    res.send('hello')
  })

  app.get('/stream', (req, res) => {
    const data = fs.createReadStream('./data.txt','utf-8')
    stream.pipe(res)
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

//   npx autocannon `url`