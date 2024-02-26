import React, { useState } from 'react'
import { editTodo, deleteTodo} from '../actions/action';
import { useDispatch } from 'react-redux';
const Todo = ({id,title}) => {
    const [edit,setEdit]=useState(false);
    const [newtitle,setNewTitle]=useState(title);
    const dispatch=useDispatch();
    function handleTodo(){
        if(newtitle.trim()){
        
         dispatch(editTodo({id:id,title:newtitle}))
         setEdit(false);
        }
    }
    function handleDelete(){
        dispatch(deleteTodo({id}));
    }
  return (
    <div>
        {
            edit?(
                <div className='form-group'>
                    <input className='form-control' type='text' value={newtitle} onChange={(e)=>setNewTitle(e.target.value)}/>
                    <button className='btn btn-secondary' onClick={()=>handleTodo()}>save</button>
                </div>
            ):(
                <li className='list-group-item'>
                    <p>{title}</p>
                    <div className='actions'>
                        <button className='btn btn-warning' onClick={()=>setEdit(true)}>Edit</button>
                        <button className='btn btn-danger' onClick={handleDelete}>Del</button>
                    </div>
                
                </li>
                
            )
        }
    </div>
  )
}

export default Todo
