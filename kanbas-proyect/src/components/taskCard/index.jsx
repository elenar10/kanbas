import './style.css'
import React from 'react';


function TaskCard(props) {
    function deleteTaskCard(e){
        console.log(e)
    //   localStorage.removeItem(`task${props.results.id}`)
    }
   
    return (
        <div className='cardTasK_contenedor'>
            {/* <p><span className="iconChecked"> check_circle</span></p>
            <p><span className="iconInprogress">pending</span></p> */}
            {/* <h3 className="task__name">{props.results.tarea}</h3>
            <p className="task__date">{props.results.id} {props.results.fecha}</p> */}
            <p><span className="iconDelete" onClick={deleteTaskCard}>🗑️</span> </p>
        
        </div>
    )
}
export default TaskCard;