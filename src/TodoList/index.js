import React from "react";
import '../TodoItem/index.css'

function TodoList(props){
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}
export { TodoList };