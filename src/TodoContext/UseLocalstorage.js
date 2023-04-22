import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [items, setItems] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
            try{
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
                if (!localStorageItem){
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = [];
                }else {
                    parsedItem = JSON.parse(localStorageItem);
                }
                // setItems(parsedItem);
                // setLoading(false);
            } catch (e) {
                setError(true);
            }
        }, 2000)
    });

    const saveItem = (newTodos) => {
        try {
            localStorage.setItem(itemName, JSON.stringify(newTodos));
            setItems(newTodos);
        } catch (e) {
            setError(true);
        }
    }
    return {items, saveItem, loading, error}
}
export { useLocalStorage }