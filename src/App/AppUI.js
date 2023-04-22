import React from "react";
import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from "../TodoSearch";
import {TodoList} from "../TodoList";
import {TodoItem} from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import {Modal} from '../Modal';
import {TodoContext} from "../TodoContext";
import {TodoForm} from "../TodoForm";
import {TodoLoading} from "../TodoLoading";

function AppUI() {
    const { error,
        loading,
        totalTodos,
        filterTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {loading && (
                    <TodoLoading></TodoLoading>
                )}
                {error && 'hubo un error'}
                {(!loading && totalTodos === 0) && 'Crea tu primer todo'}
                {filterTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text) }
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton setOpenModal={setOpenModal} />
            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </React.Fragment>
    );
}
export {AppUI }