import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateTodo(){
    const [todo,setTodo]=useState('')
    const navigate=useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/create',{todo})
        .then(res=>{
            console.log(res);
            navigate('/')
        }).catch(err=>console.log(err))
    }

    return(
        <div className='d-flex vh-100 bg-white justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Add Todo</h2>
                    <div className='mb-2'>
                        <input type="text" placeholder='Enter Todo' className='form-control'
                        onChange={e=>setTodo(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-success'>Add</button>
                </form>
            </div>
        </div>
    )
}

export default CreateTodo