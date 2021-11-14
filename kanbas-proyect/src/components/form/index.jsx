import './style.css'
import { Fragment, useState } from 'react'
import React from 'react';

function Form(props) {
    const [btnEnabled, setBtnEnabled] = useState(false);
    const [title, setTitle] = useState('');
    let counter = localStorage.getItem('counter') ?? 1;

    // comprueba si el input tiene algo escrito, si es así, la variable de estado 'btnEnabled' se pone true, si no tiene nada se pone 'false'. Esto es para que en función de ella, el botón quede con opacidad o no.
    const comprobationInput = (e) => {
        if (e.target.value === '') {
            setBtnEnabled(false);
        } else {
            setBtnEnabled(true);
        }
    }

    // está función es la del evento onClick del form. 
    // Se encarga de recoger fecha y hora actual, armar un objeto con 
    // los valores de la tarea y almacenarlos en la localStorage. 
    // También actualiza el contador para poder guardar una siguiente tarea
    const sendTarea = (e) => {
        e.preventDefault();
        const day = new Date();
        const fecha = `${day.getDate()}/${day.getMonth() + 1}/${day.getFullYear()} ${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`;
        const objectTask = {
            id: counter,
            tarea: e.target.task.value,
            fecha: fecha,
            estado: props.titleTask,
            estadoIcono: props.titleTask === 'Done' ? 'Done' : 'Pending'
        }
        localStorage.setItem(`task${counter}`, JSON.stringify(objectTask));
        setTitle(e.target.task.value);
        counter++;
        localStorage.setItem('counter', counter);
        props.onUpdateTaskList();
    }
    return (
        <Fragment>
            {title === ''
                ? <form className='form_container2' onSubmit={sendTarea}>
                    <textarea name="task" id="task" cols="28" rows="3" placeholder='Enter a note' maxLength='80' required className='text_tarea' onInput={comprobationInput}></textarea>
                    <div className='btn_container'>
                        {/*aca hago el condicional para poner una clase u otra al botón verde, para poner o quitar opacidad. Esto es posible gracias a la funcion 'comprobationInput' que llamo en el evento onInput del text area de la linea anterior*/}
                        {btnEnabled ? <button type='submit' className='btn btn_color'>Add</button>
                            : <button type='submit' className='btn btn_color btn_opacity'>Add</button>}
                        <button className='btn btn_cancelar' type='reset' onClick={() => setBtnEnabled(false)}>Cancel</button>
                    </div>
                </form>
                : ''}
        </Fragment>
    )
}
export default Form;