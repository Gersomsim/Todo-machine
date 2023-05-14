import React from "react";
import {UseTodos} from './useTodos'
import {TodoHeader} from "../TodoHeader";
import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from "../TodoSearch";
import {TodoList} from "../TodoList";
import {TodoLoading} from "../TodoLoading";
import {TodoItem} from "../TodoItem";
import {CreateTodoButton} from "../CreateTodoButton";
import {Modal} from "../Modal";
import {TodoForm} from "../TodoForm";
import {TodoError} from "../TodoError";
import {EmptyTodos} from "../EmptyTodos";
import {ChangeWithAlertStorageListener} from "../ChangeAlert";

function App() {
    const {
        error,
        loading,
        totalTodos,
        filterTodos,
        completeTodo,
        deleteTodo,
        openModal,
        completedTodo,
        synchronizeTodos,
        searchValue,
        addTodo,
        setSearchValue,
        setOpenModal,
    } = UseTodos();
    return (
        <React.Fragment>
            <TodoHeader  loading={loading}>
                <TodoCounter
                    completedTodo={completedTodo}
                    totalTodos={totalTodos}
                />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>
            <TodoList
                error={error}
                totalTodos={totalTodos}
                loading={loading}
                filterTodos={filterTodos}
                searchValue={searchValue}
                onError={()=> <TodoError /> }
                onLoading={()=> <TodoLoading /> }
                onEmptyTodos={()=> <EmptyTodos /> }
                onEmptySearchResult={
                    (searchText) => <p>No hay resultados para {searchText}</p>
                }
                render={todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text) }
                        onDelete={() => deleteTodo(todo.text)}
                    />
                )}
            >
                {/*{ todo => (*/}
                {/*    <TodoItem*/}
                {/*        key={todo.text}*/}
                {/*        text={todo.text}*/}
                {/*        completed={todo.completed}*/}
                {/*        onComplete={() => completeTodo(todo.text) }*/}
                {/*        onDelete={() => deleteTodo(todo.text)}*/}
                {/*    />*/}
                {/*)}*/}

            </TodoList>
            <CreateTodoButton setOpenModal={setOpenModal} />
            {!!openModal && (
                <Modal>
                    <TodoForm
                        addTodo={addTodo}
                        setOpenModal={setOpenModal}
                    />
                </Modal>
            )}
            <ChangeWithAlertStorageListener synchronze={synchronizeTodos} />
        </React.Fragment>
    );
}

export default App;
