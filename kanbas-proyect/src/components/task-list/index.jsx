import React, { Fragment, useState } from "react";
import './style.css'
import Form from '../form'



function TaskList(props) {
    const [addTask, setAddTask] = useState(false);
    function openForm() {
        if (addTask === true) {
            setAddTask(false)
        } else {
            setAddTask(true)
        }
    }
    return (
        <Fragment>
            <div className="taskList__container">
                <div className="taskList__header">
                    <div className="title-counter__wrapper">
                        <div className="counter">12</div>
                        <h3 className="task__title">{props.title}</h3>
                    </div>
                    <button className="button__add" onClick={openForm}>+</button>
                    {props.remove}
                </div>
                {addTask ? <Form></Form> : ' '}
            </div>
        </Fragment>
    )
}

export default TaskList;

