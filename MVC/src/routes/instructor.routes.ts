import { Router } from "express";

const instructorRoute = Router()

instructorRoute.get('/', (req,res)=>{
    res.send('a Instructor')
})

instructorRoute.get('/:id', (req,res)=>{
    res.send('a Instructor by id')
})

export {instructorRoute}