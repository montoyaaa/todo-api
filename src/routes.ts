import { Request, Response, Router } from "express";
import { randomUUID } from "crypto";
import { todoList } from ".";

const routes = Router();

routes.post("/todo", (request: Request, response: Response) => {
  const { todo } = request.body;

  const newTodo = { todo, id: randomUUID() };
  todoList.push(newTodo);

  return response.json(newTodo);
});

routes.get("/todo", (_, response: Response) => {
  return response.json(todoList);
});

routes.delete("/todo/:id", (request: Request, response: Response) => {
  const { id } = request.params;

  const index = todoList.findIndex((todo) => todo.id === id);

  todoList.splice(index, 1);

  return response.json(todoList);
});

routes.put("/todo/:id", (request: Request, response: Response) => {
  const { id } = request.params;
  const { todo } = request.body;

  const index = todoList.findIndex((todo) => todo.id === id);

  const todoForEdit = todoList[index];
  todoForEdit["todo"] = todo;

  return response.json(todoForEdit);
});

export default routes;
