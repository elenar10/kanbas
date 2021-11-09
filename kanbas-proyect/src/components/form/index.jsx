import './style.css'
import { Fragment, useState } from 'react'
import React from 'react';

function Form() {
    const [btnEnabled, setBtnEnabled] = useState(false);
    const [title, setTitle] = useState('');
    const comprobationInput = (e) => {
        if (e.target.value === '') {
            setBtnEnabled(false);
        } else {
            setBtnEnabled(true);
        }
    }
    const sendTarea = (e) => {
        e.preventDefault();
        setTitle(e.target.task.value);
    }
    return (
        <Fragment>
            {title === ''
                ? <form className='form_container2' onSubmit={sendTarea}>
                    <textarea name="task" id="task" cols="28" rows="3" placeholder='Enter a note' maxLength='80' required className='text_tarea' onInput={comprobationInput}></textarea>
                    <div className='btn_container'>
                        {btnEnabled ? <button type='submit' className='btn btn_color'>Add</button>
                            : <button type='submit' className='btn btn_color btn_opacity'>Add</button>}
                        <button className='btn btn_cancelar' type='reset' onClick={() => setBtnEnabled(false)}>Cancel</button>
                    </div>
                </form>
                : <h1>nueva tarea</h1>}
        </Fragment>
    )
}
export default Form;