import React from "react";
import './index.css'

function CreateTodoButton({setOpenModal}) {
    const openModal = () => {
        setOpenModal(prevState => !prevState);
    }
    return (
        <button
            className="CreateTodoButton"
            onClick={openModal}
        >
            +
        </button>
    )
}
export { CreateTodoButton }