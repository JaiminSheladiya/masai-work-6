import { Router } from "express";
import { Student } from "../models/student.model";
import { createStudent } from "../controller/student.controller";
const studentRoute = Router();

studentRoute.get("/", async (req, res) => {
  const allStudents = await Student.find();
  res.send(allStudents);
});

studentRoute.get("/:id", (req, res) => {
  res.send("a student by id");
});

studentRoute.post<Student, any, Student>("/", async (req, res) => {
  const { name, age } = req.body;
  const {message , code} = await createStudent({name , age , cohort : 'JS201' , rating : 0, isPlaced : false})

  if(code !== 200){
    return res.status(code).send('error')
  }
  res.send(message)
});

export { studentRoute };
