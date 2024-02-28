import React, { useState, useEffect } from 'react';
import './App.css';
import AgregarTarea from './AgregarTarea';
import ListaTareas from './ListaTareas';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let [tareas, setTareas] = useState(() => {
    let tareasGuardadas = localStorage.getItem('tareas');
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  let agregarTarea = (tareaNueva) => {
    if (tareaNueva.trim() !== '') {
      setTareas([...tareas, { id: Date.now(), text: tareaNueva, completado: false }]);
    }
  };

  let cambiarTarea = (tareaID) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === tareaID ? { ...tarea, completado: !tarea.completado } : tarea
      )
    );
  };

  let borrarTarea = (tareaID) => {
    setTareas(tareas.filter((tarea) => tarea.id !== tareaID));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header text-center">
              <h1>Gestión de Tareas</h1>
            </div>
            <div className="card-body">
              <AgregarTarea agregarTarea={agregarTarea} />
              <ListaTareas
                tareas={tareas}
                cambiarTarea={cambiarTarea}
                borrarTarea={borrarTarea}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
