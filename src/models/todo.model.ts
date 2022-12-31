import * as  mongoose from 'mongoose';
import TodoI from '../interface/todo.interface';




const todoM = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    done : {
        type : Boolean,
        default : false,
    },
    description : {
        type : String ,
        required : false,
    }
},{
    timestamps : true,
});

export default  mongoose.model<TodoI>('todoM',todoM);