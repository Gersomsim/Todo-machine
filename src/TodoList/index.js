import React from "react";
import '../TodoItem/index.css'

function TodoList(props){
    const renderFunc = props.children || props.render
    return (
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
            {(!!props.totalTodos && !props.filterTodos.length) && props.onEmptySearchResult(props.searchValue)}

            {(!props.loading && !props.error) && props.filterTodos.map(renderFunc)}
        </section>
    )
}
export { TodoList };