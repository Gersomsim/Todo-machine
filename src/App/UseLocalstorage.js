import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}));
    const {
        loading,
        error,
        items,
        synchronize,
    } = state;

    const onError = (e) => dispatch({type: actionTypes.error, payload: e});
    const onSuccess = (items) => dispatch({ type: actionTypes.success, payload: items})
    const onSave = (items) => dispatch({type: actionTypes.save, payload: items})
    const onSynchronize = () => dispatch({type: actionTypes.synchronize})

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
                onSuccess(parsedItem)
            } catch (e) {
                onError(e)
            }
        }, 2000)
    }, [synchronize]);

    const saveItem = (newTodos) => {
        try {
            localStorage.setItem(itemName, JSON.stringify(newTodos));
            onSave(newTodos)
        } catch (e) {
            onError(e)
        }
    }
    const synchronizeItem = () =>{
        onSynchronize()
    }
    return {items, saveItem, loading, error, synchronizeItem}
}

const initialState =({initialValue}) => ({
    loading: true,
    error: false,
    items: initialValue,
    synchronize: true,
})
const actionTypes = {
    error: 'ERROR',
    success: 'SUCCESS',
    save: 'SAVE',
    synchronize: 'SYNC',
}
const reducer = (state, action) => {
    return reducerObj(state, action.payload)[action.type] || state;
}
const reducerObj = (state, payload) => ({
    [actionTypes.error]: {
        ...state,
        error: true,
    },
    [actionTypes.success]: {
        ...state,
        error: false,
        items: payload,
        loading: false,
        synchronize: true,
    },
    [actionTypes.save]: {
        ...state,
        items: payload,
    },
    [actionTypes.synchronize]: {
        ...state,
        loading: true,
        synchronize: false,
    }
})

export { useLocalStorage }