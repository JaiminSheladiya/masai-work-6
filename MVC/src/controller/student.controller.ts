import { Student } from "../models/student.model";

    async function createStudent(student : Student) : Promise<{message : string , code :number}>{
        const { name, age , cohort} = student;
        if (name.length < 3) {
          return ({
            message: "validation error : name cannot be smaller than 3 letter",
            code : 404
          });
        }
      
        if (age < 18 && age > 28) {
          return ({
            message: "validation error : age is incorrect",
            code : 404
          });
        }
      
        // any other validation
      
        const newStudent = new Student({ name, age, cohort: "JS201" });
        await newStudent.save();
        return {
            message : 'Student created successfully',
            code : 201
        }
    }


export { createStudent }

// up to you.