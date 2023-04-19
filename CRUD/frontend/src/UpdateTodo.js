import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateTodo(){
    const [todo,setTodo]=useState('')
    const {id} =useParams();
    const navigate=useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+id,{todo})
        .then(res=>{
            console.log(res);
            navigate('/')
        }).catch(err=>console.log(err))
    }

    return(
        <div className='d-flex vh-100 bg-white justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Update Todo</h2>
                    <div className='mb-2'>
                        <input type="text" placeholder='Enter Todo' className='form-control'
                        onChange={e=>setTodo(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateTodo