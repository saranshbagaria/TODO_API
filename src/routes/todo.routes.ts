import { Router } from "express";   

import TodoController from "../controller/todo.controller";
import TodoC from "../controller/todo.controller";


const todoController: TodoC = new TodoController();

const todo_router = Router();

todo_router.get("/todos", todoController.getTodo);

todo_router.post("/add-todo", todoController.addTodo);

todo_router.put("/edit-todo/:id", todoController.updateTodo);

todo_router.delete("/delete-todo/:id", todoController.deleteTodo);

export default todo_router;


/**
 * /api/todos
 * /api/add-todo
 * /api/edit-todo/:id
 * /delete-todo/:id
 * 
 */