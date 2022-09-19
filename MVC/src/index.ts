import express from 'express'
// import { instructorRoute } from './routes/instructor.routes'
// import { studentRoute } from './routes/student.routes'
import { instructorRoute , studentRoute } from './routes'
const app = express()

app.use(express.urlencoded({extended : true}))
app.use(express.json())

// Routes
app.use('/student',studentRoute)
app.use('/instructor', instructorRoute)
app.get('/', (req, res) => {res.send('hello')})

app.listen(8080, () => {
console.log(`Example app listening on port 8080`)
})

