import React from "react";
const tofod = [
    { text: 'cortar cebolla', complete: false },
    { text: 'Tomar curso de intro de react', complete: false },
    { text: 'Llorar con la llorona', complete: false }
]

function App() {
  return (
      <React.Fragment>
          <TodoCounter />
          <h2>Haz completado 3 de 4 TODOs</h2>
          <TodoSearch />
          <input type="text" placeholder="Cebolla"/>
          <TodoList>
              {todos.map(todo => (
                  <TodoItem />
              ))}
          </TodoList>
          <CreateTodoButton />
          <button>+</button>
      </React.Fragment>
  );
}

export default App;
