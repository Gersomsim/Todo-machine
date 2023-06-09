import React from "react";
import {withStorageListener} from "./withStorageListener";

function ChangeAlert({show, toggleShow}) {
    if (show) {
        return (
            <div>
                <p>Hubo cambios</p>
                <button onClick={() => toggleShow(false)}>
                    Actializar Data
                </button>
            </div>
        )
    }else  {
        return null;
    }
}

const ChangeWithAlertStorageListener = withStorageListener(ChangeAlert)

export { ChangeWithAlertStorageListener };