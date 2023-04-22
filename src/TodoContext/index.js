import React from "react";
import {useLocalStorage} from "./UseLocalstorage";

const TodoContext = React.createContext();
function TodoProvider(props) {
    const {items: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
    const [openModal, setOpenModal] = React.useState(false)
    const [searchValue, setSearchValue] = React.useState('');
    const completedTodo = todos.filter(t => !!t.completed).length;
    const totalTodos = todos.length;
    let filterTodos = []
    if (!searchValue.length >= 1) {
        filterTodos = todos;
    } else {
        filterTodos = todos.filter(t => {
            const todoText = t.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }
    const completeTodo = (todoText) => {
        const i = todos.findIndex(t => t.text === todoText);
        const newTodos = [...todos];
        newTodos[i].completed = true;
        saveTodos(newTodos);
    }
    const deleteTodo = (todoText) => {
        const i = todos.findIndex(t => t.text === todoText);
        const newTodos = [...todos];
        newTodos.splice(i, 1);
        saveTodos(newTodos);
    }
    const addTodo = (todo) => {
        const newTodos = [...todos];
        newTodos.push({
            complete: false,
            text: todo,
        });
        saveTodos(newTodos)
    }

    return (
        <TodoContext.Provider value={{
            totalTodos,
            completedTodo,
            searchValue,
            setSearchValue,
            filterTodos,
            completeTodo,
            deleteTodo,
            loading,
            error,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };