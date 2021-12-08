import { Request, Response, Router } from "express";
import { randomUUID } from "crypto";

const routes = Router();

interface Todo {
  todo: any;
  id: string;
}

let todoList: Todo[] = [];

routes.post("/todo", (request: Request, response: Response) => {
  try {
    const { todo } = request.body;

    if (!!!todo) {
      throw new Error("Todo is required");
    }

    const newTodo = { todo, id: randomUUID() };
    todoList.push(newTodo);

    return response.json(newTodo);
  } catch (error) {
    let errorMessage = "Error creating todo";
    if (error instanceof Error) {
      errorMessage = error.message;
      return response.status(400).json({
        message: errorMessage,
      });
    }
  }
});

routes.get("/todo", (_, response: Response) => {
  return response.json(todoList);
});

routes.delete("/todo/:id", (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    if (!!!id) {
      throw new Error("ID is required");
    }

    const index = todoList.findIndex((todo) => todo.id === id);

    todoList.splice(index, 1);

    return response.json(todoList);
  } catch (error) {
    let errorMessage = "Error deleting todo";
    if (error instanceof Error) {
      errorMessage = error.message;
      return response.status(400).json({
        message: errorMessage,
      });
    }
  }
});

routes.put("/todo/:id", (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const { todo } = request.body;

    if (!!!id) {
      throw new Error("ID is required");
    }
    if (!!!todo) {
      throw new Error("Todo is required");
    }

    const index = todoList.findIndex((todo) => todo.id === id);

    const todoForEdit = todoList[index];
    todoForEdit["todo"] = todo;

    return response.json(todoForEdit);
  } catch (error) {
    let errorMessage = "Error updating todo";
    if (error instanceof Error) {
      errorMessage = error.message;
      return response.status(400).json({
        message: errorMessage,
      });
    }
  }
});

export default routes;
