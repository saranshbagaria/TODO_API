import { Express, Request, Response } from "express"
import log from '../logger/index';
import TodoI from '../interface/todo.interface';
import TodoM from '../models/todo.model';


export default class TodoC {

/**
 * 
 * @param req request parameter for get request
 * @param res response parameter for get request
 * @function getTodo send all todo list 
 */
    getTodo = async (req:Request, res: Response) => {
        try{
            const todos : TodoI[] = await TodoM.find();
            res.status(200).json({todos});
        }catch(e){
            res.status(500).json({error: e});
            log.error(`getTodo error->${e}`);
        }
    }
/**
 * 
 * @param req request parameter for adding new todo 
 * @param res response parameter for adding new todo 
 * @function addTodo add new todo to database
 */
    addTodo = async (req:Request, res: Response) => {
        try{
            const r_body = req.body as Pick<TodoI, "title" |"description"|"done">;
            const todo:TodoI = new TodoM(
                {
                    "title" : r_body.title,
                    "description": r_body.description,
                    "done" : r_body.done,
                }
            )

            const newTodo : TodoI = await todo.save();
            const allTodo : TodoI[] = await TodoM.find();
            
            res
            .status(201)
            .json({
                allTodo
            });
        }catch(e){
            res.status(501).json({"error": e});
            log.error(`addTodo error->${e}`);
        }
    }
    
    
    updateTodo =async (req:Request, res: Response) => {
        try{
            const {
                params : {id},
                body,
            } = req;

            const updateTodo : TodoI | null = await TodoM.findByIdAndUpdate(
                {_id: id},
                body
            )
            
            const allTodo: TodoI[] = await TodoM.find();

            res.status(200).json(
                {
                    allTodo
                }
            )
        }catch(e){
            res.status(400).json({"error" : e});
            log.error(`updateTodo error -> ${e}`)
        }
    }


    deleteTodo = async (req:Request, res: Response) => {
        try{
            const deletedTodo : TodoI | null = await TodoM.findByIdAndRemove(
                req.params.id
            )

            const allTodos : TodoI[] = await TodoM.find();

            res.status(200).json({
                allTodos
            });

        }catch(e){
            res.status(400).json({"error" : e});
            log.error(`updateTodo error -> ${e}`)
        }
    }
}


