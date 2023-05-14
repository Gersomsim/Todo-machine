import React from "react";

function withStorageListener(WrappedComponent) {
    return function WrapperComponentWithStorageListener(props) {
        const [storageChange, setStorageChanges] = React.useState(false);

        window.addEventListener('storage', (change) => {
            if (change.key === "TODOS_V1") {
                console.log('Hubo cambios en TODOS_V1')
                setStorageChanges(true);
            }
        });

        const toggleShow = () =>{
            props.synchronze()
            setStorageChanges(false);
        }

        return (
            <WrappedComponent
                show={storageChange}
                toggleShow={toggleShow}
            />
        )
    }
}

export  { withStorageListener };