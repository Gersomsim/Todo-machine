import React from "react";
import './index.css'
import {TodoContext} from "../TodoContext";

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext)
    return (
            <input
                className="TodoSearch"
                type="text"
                placeholder="Cebolla"
                onChange={e => setSearchValue(e.target.value)}
                value={searchValue}
            />
    );
}
export { TodoSearch }