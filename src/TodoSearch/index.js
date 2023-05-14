import React from "react";
import './index.css'

function TodoSearch({ searchValue, setSearchValue, loading }) {
    return (
            <input
                className="TodoSearch"
                type="text"
                placeholder="Cebolla"
                onChange={e => setSearchValue(e.target.value)}
                value={searchValue}
                disabled={loading}
            />
    );
}
export { TodoSearch }