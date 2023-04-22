import React from "react";
import {TodoContext} from "../TodoContext";
import './index.css'

function TodoForm() {
    const [newTodo, setNewTodo] = React.useState('')
    const { addTodo, setOpenModal } = React.useContext(TodoContext)
    const onCancel = () => {
        setOpenModal(false);
    }
    const onAdd = (event) => {
        event.preventDefault();
        addTodo(newTodo)
        setOpenModal(false);
    }
    return (
        <form onSubmit={onAdd}>
            <label htmlFor="newTodo">Escribe tu nuevo TODO</label>
            <textarea name="newTodo" id="newTodo"
                      placeholder="Cortar cebolla"
                      value={newTodo}
                      onChange={e => setNewTodo(e.target.value)}
            ></textarea>
            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button TodoForm-button--cancel"
                    type="button" onClick={onCancel}>Cancelar</button>
                <button
                    className="TodoForm-button TodoForm-button--add "
                    type="submit">Añadir</button>
            </div>
        </form>
    )
}

export {TodoForm};