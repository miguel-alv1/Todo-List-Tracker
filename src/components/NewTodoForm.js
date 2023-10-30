import React, {useState} from 'react';

function NewTodoForm() {
    const submitTodo = () => {

    }

    return (
        <div className='mt-5'>
            <form>
                <div className='mt-3'>
                    <label className='form-label;'>Priority</label>
                    <input type='text' className='form-control'></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Task Description</label>
                    <input type='text' className='form-control' rows={3}></input>
                </div>
            </form>
        </div>
    )
}

export default NewTodoForm