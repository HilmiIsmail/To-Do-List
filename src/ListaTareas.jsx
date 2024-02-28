import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function ListaTareas({ tareas, cambiarTarea, borrarTarea }) {
    return (
        <ul className="list-group">
            {tareas.map((tarea) => (
                <li key={tarea.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <input
                            type="checkbox"
                            className="form-check-input me-2"
                            checked={tarea.completado}
                            onChange={() => cambiarTarea(tarea.id)}
                        />
                        <span style={{ textDecoration: tarea.completado ? 'line-through' : 'none' }}>
                            {tarea.text}
                        </span>
                    </div>
                    <button
                        className="btn btn-danger"
                        onClick={() => borrarTarea(tarea.id)}
                    >
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default ListaTareas;
