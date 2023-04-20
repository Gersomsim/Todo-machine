import React from "react";
import { TodoCounter } from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import {TodoList} from "./TodoList";
import {TodoItem} from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";
const todos = [
    { text: 'cortar cebolla', complete: false },
    { text: 'Tomar curso de intro de react', complete: false },
    { text: 'Llorar con la llorona', complete: false }
]

function App() {
  return (
      <React.Fragment>
          <TodoCounter />
          <TodoSearch />
          <TodoList>
              {todos.map(todo => (
                  <TodoItem key={todo.text} text={todo.text} />
              ))}
          </TodoList>
          <CreateTodoButton />
      </React.Fragment>
  );
}

export default App;
