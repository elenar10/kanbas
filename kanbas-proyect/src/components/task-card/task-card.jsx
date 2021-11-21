import './style.css'
import { useContext, useRef } from 'react';
import { DateContext } from '../contexto';
import Draggable from 'react-draggable';

function TaskCard(props) {
    
    const [date, setDate] = useContext(DateContext);
    // recuperamos del localStorage el objeto por su id
    let resultsObjet = localStorage.getItem(`task${props.results.id}`);
    let estadoIcons = JSON.parse(resultsObjet)

    function handleClickDelete() {
        localStorage.removeItem(`task${props.results.id}`)
        props.onUpdateTaskList();
        hourUpdate();
    }

    function hourUpdate() {
        const day = new Date();
        const lastDate = `Updated on ${day.getDate()}-${day.getMonth() + 1} ${day.getSeconds()}`
        setDate(lastDate)
        localStorage.setItem('lastUpdate', lastDate);
    }


    //drag and drop
    const nodeRef = useRef(null);

    let cambiarClase = document.querySelectorAll('.taskList__container');
    const cambio = (e, data) => {
        cambiarClase.forEach(e => e.classList.remove('overflow'));
        handleEvent(e, data);
    }
    const parar = (e, data) => {
        cambiarClase.forEach(e => e.classList.add('overflow'));
        let card = JSON.parse(localStorage.getItem(`task${props.results.id}`)) ;
        if (data.x < -350 && data.x >-600 && card.estado === 'Done'){
            card.estado = 'In progress';
            card.estadoIcono = 'Pending'
            
        } else if (data.x < -350 && card.estado === 'In progress') {
            card.estado = 'To do';
        } else if (data.x > 350 && card.estado === 'In progress'){
            card.estado = 'Done';
            card.estadoIcono = 'Done'
        } else if (data.x > 350 && data.x< 650 && card.estado === 'To do'){
            card.estado = 'In progress';
            card.estadoIcono = 'Pending'
        } else if (data.x > 500 && card.estado === 'To do'){
            card.estado = 'Done';
            card.estadoIcono = 'Done'
        } else if (data.x <-600 && card.estado === 'Done'){
            card.estado = 'To do';
            card.estadoIcono = 'Pending'
        }
        localStorage.setItem(`task${props.results.id}`, JSON.stringify(card))
        hourUpdate();
        props.onUpdateTaskList();
        window.location.reload();

    }
    const handleEvent = (e, data) => {
        console.log('Event Type', e.type);
        console.log(data.x);
      }
      
    return (
        <Draggable nodeRef={nodeRef} onStart={cambio} onStop={parar} cancel='span' >
            <div ref={nodeRef} className="cardTasK_contenedor">
                <div className='cardTask_tilte-Icons'>
                    {estadoIcons?.estadoIcono === 'Pending' ?
                        <span className="iconInprogress">pending</span>
                        : <span className="iconChecked"> check_circle</span>}
                </div>
                <div className="tittle--date__wrapper">
                    <h3 className="task__name">{props.results.tarea}</h3>
                    <p className="task__date">#{props.results.id} created on {props.results.fecha}</p>
                </div>
                <span className="iconDelete" onClick={handleClickDelete}>🗑️</span>
            </div >
        </Draggable>
    )
}
export default TaskCard;
