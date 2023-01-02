import { Router } from "express";   

import TodoController from "../controller/todo.controller";
import TodoC from "../controller/todo.controller";


const todoController: TodoC = new TodoController();

const todo_router = Router();

/**
 * @swagger
 * components:
 *      schemas:
 *          ToDo:
 *              type: object
 *              required:
 *                  - title
 *              properties:
 *                  _id :
 *                      type : string
 *                      description : Auto generated Id
 *                  title:
 *                      type: string
 *                      description : Title of the todo 
 *                  description:
 *                      type : string
 *                      description : description of the todo app
 *                  done: 
 *                      type : boolean
 *              example : 
 *                  _id: 68844c0ba662bd08dac8afe3
 *                  title : Title for what to do
 *                  done : false
 *                  description : Description for ToDo title 
 */

/** 
 * @swagger
 *  components:
 *      schemas:
 *          todo_post:
 *              type: object
 *              required:
 *                  - title
 *              properties:
 *                  title:
 *                      type: string
 *                      description : Title of the todo 
 *                  description:
 *                      type : string
 *                      description : description of the todo app
 *              example : 
 *                  title : Title for what to do
 *                  description : Description for ToDo title         
 */


/** 
 * @swagger
 *  components:
 *      schemas:
 *          todo_put:
 *              type: object
 *              required:
 *                - done
 *              properties:
 *                  done:
 *                      type: boolean
 *                      description : provide true if done 
 *              example : 
 *                  done : true
 */                  


/**
 * @swagger
 * /api/todos:
 *  get:
 *      summary : Returns the list of all todos available
 *      responses : 
 *          200: 
 *              description : todos list
 *              content:
 *              application/json:
 *                  schema:
 *                      done:
 *                          type: array 
 *                          items:
 *                              $ref : '#/components/schemas/ToDo'
 */

todo_router.get("/todos", todoController.getTodo);

/**
 * @swagger
 * /api/add-todo:
 *  post:
 *      summary : Update the data of todo list
 *      requestBody: 
 *          required : true
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/todo_post'
 *      responses : 
 *          201: 
 *              description : todos list
 *              content:
 *              application/json:
 *                  schema:
 *                      type: array 
 *                      items:
 *                          $ref : '#/components/schemas/ToDo'
 */
todo_router.post("/add-todo", todoController.addTodo);



/**
 * @swagger
 *  /api/edit-todo/{id}:
 *  put:
 *      summary : Add new todo to database
 *      parameters:
 *        - in: path
 *          name: id
 *          required : true
 *          schema :
 *             type : string
 *           
 *          description : Id of todo that you want to delete
 *      
 *      requestBody: 
 *          required : true
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/todo_put'
 *      responses : 
 *          200: 
 *              description : todos list
 *              content:
 *              application/json:
 *                  schema:
 *                      type: array 
 *                      items:
 *                          $ref : '#/components/schemas/ToDo'
 */
todo_router.put("/edit-todo/:id", todoController.updateTodo);



/**
 * @swagger
 *  /api/delete-todo/{id}:
 *  delete:
 *      summary : Delete the todo from database
 *      parameters:
 *        - in: path
 *          name: id
 *          required : true
 *          schema :
 *             type : string
 *           
 *          description : Id of todo that you want to delete
 *      responses : 
 *          200: 
 *              description : todos list
 *              content:
 *              application/json:
 *                  schema:
 *                      type: array 
 *                      items:
 *                          $ref : '#/components/schemas/ToDo'
 */
todo_router.delete("/delete-todo/:id", todoController.deleteTodo);

export default todo_router;
