import {Schema , model} from 'mongoose'

export type Student = {
    name : string ;
    age : number ;
    cohort : string;
    rating : number;
    isPlaced : boolean;
}

const StudentSchema = new Schema<Student>({
    name : String ,
    age : Number ,
    cohort : String,
    rating : Number,
    isPlaced : Boolean
})

export const Student = model('student' , StudentSchema)