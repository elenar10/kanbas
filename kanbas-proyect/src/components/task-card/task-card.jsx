import './style.css'

function TaskCard(props) {

    // recuperamos del localStorage el objeto por su id
   let resultsObjet= localStorage.getItem(`task${props.results.id}`);
   let estadoIcons= JSON.parse(resultsObjet)
    function handleClickDelete(){
        localStorage.removeItem(`task${props.results.id}`)
        props.onUpdateTaskList();

    }
    return (
        <div className='cardTasK_contenedor'>
            <div className='cardTask_tilte-Icons'>
                {estadoIcons?.estadoIcono === 'Pending' ?
                    <p><span className="iconInprogress">pending</span></p>
                    : <p><span className="iconChecked"> check_circle</span></p>}

                <h3 className="task__name">{props.results.tarea}</h3>
                <span className="iconDelete" onClick={handleClickDelete}>&#128465;</span>
            </div>
            <p className="task__date">#{props.results.id} {props.results.fecha}</p>
        </div>
    )
}
export default TaskCard;