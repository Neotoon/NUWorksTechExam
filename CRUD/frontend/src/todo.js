import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Todo(){
    const [todo,setTodo]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res=>setTodo(res.data))
        .catch(err=>console.log(err))
    },[])

    return(
        <div className='d-flex vh-100 bg-white justify-content-center align-items-center'>
            <div className='w-50 rounded p-3'>
                <button className='btn btn-success'>Add +</button>
                <table className='table'>
                    <thead>
                        <tr>
                        <th>Todo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todo.map((data,i)=>(
                                <tr key={i}>
                                    <td>{data.Todo}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Todo