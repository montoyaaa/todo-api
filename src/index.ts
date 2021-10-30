import express from "express";
import routes from "./routes";

const app = express();

interface Todo {
  todo: any;
  id: string;
}

export let todoList: Todo[] = [];

app.use(express.json());
app.use(express.urlencoded());

app.use(routes);

const port = 8080;
app.listen(port, () => console.log(`🚀 App rodando na porta ${port} 🚀`));
