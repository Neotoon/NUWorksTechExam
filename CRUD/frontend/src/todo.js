import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

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
                <Link to="/create" className='btn btn-success'>Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                        <th>Todo</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todo.map((data,i)=>(
                                <tr key={i}>
                                    <td>{data.Todo}</td>
                                    <td>
                                        <Link to={`update/${data.ID}`} className='btn btn-primary'>Update</Link>
                                        <button className='btn btn-danger ms-2'>Done</button>
                                    </td>
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