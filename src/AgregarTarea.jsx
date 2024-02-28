import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function AgregarTarea({ agregarTarea }) {
    let [tareaNueva, setTareaNueva] = useState('');

    let inputCambios = (e) => {
        setTareaNueva(e.target.value);
    };

    let handleAgregarTarea = () => {
        agregarTarea(tareaNueva);
        setTareaNueva('');
    };

    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Agregar nueva tarea"
                value={tareaNueva}
                onChange={inputCambios}
            />
            <button
                className="btn btn-primary"
                type="button"
                onClick={handleAgregarTarea}
            >
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
}

export default AgregarTarea;
