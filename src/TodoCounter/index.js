import React from "react";
import './index.css';
import {TodoContext} from "../TodoContext";

function TodoCounter(){
    const {completedTodo, totalTodos} = React.useContext(TodoContext)
    return (
        <h2 className="TodoCounter">Haz completado {completedTodo} de {totalTodos} TODOs</h2>
    )
}

export { TodoCounter };