import './style.css'
import React from 'react';


function TaskCard({tarea, id, fecha, estadoIcon}) {
    function deleteTaskCard(e){
        console.log(e)
      localStorage.removeItem(`task${id}`)
    }
   
    return (
        <div className='cardTasK_contenedor'>
            <p><span className="iconChecked"> check_circle</span></p>
            <p><span className="iconInprogress">pending</span></p> */}
            <h3 className="task__name">{tarea}</h3>
            <p className="task__date">{id} {fecha}</p>
            <p><span className="iconDelete" onClick={deleteTaskCard}>🗑️</span> </p>
        
        </div>
    )
}
export default TaskCard;