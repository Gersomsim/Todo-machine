import React from "react";
import './index.css';

function TodoCounter({completedTodo, totalTodos, loading}){
    return (
        <h2 className={`TodoCounter ${loading ? "TodoCounter--loading" : ""}`}>Haz completado {completedTodo} de {totalTodos} TODOs</h2>
    )
}

export { TodoCounter };