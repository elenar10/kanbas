import React, { Fragment, useEffect, useState } from "react";
import './style.css'
import Form from '../form'
import Prueba from "./prueba";

function TaskList(props) {
    const [addTask, setAddTask] = useState(false);
    const [task, setTask] = useState([]);


    let counter = localStorage.getItem('counter') ?? 1;
    function openForm() {
        if (addTask === true) {
            setAddTask(false)
        } else {
            setAddTask(true)
        }
    }

    useEffect (() => {
        let arr = [];
        for (let i =1; i<counter;i++){
                arr.push(JSON.parse(localStorage.getItem(`task${i}`)))
        }
       setTask(arr)
    }, [counter])

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
                {task.map((e) => props.title === e.estado ?<Prueba key={e.id} results={e}></Prueba>:'')}
            </div>
        </Fragment>
    )
}

export default TaskList;

