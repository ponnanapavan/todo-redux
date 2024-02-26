
import { useDispatch } from 'react-redux';
import './App.css';
import { useState } from 'react';
import { addTodo } from './actions/action';
import TodoList from './Todolist/TodoList';


function App() {
  const dispatch=useDispatch();// it will return a function 
  const [todotitle,setTodoTitle]=useState("")
  function handleAdd(){
     if(todotitle.trim()){
     const newTodo= {
         title:todotitle
      }
      dispatch(addTodo(newTodo))// new todo will be added
      setTodoTitle("");
     }
  }
  return (
    <div className="container mt-5 w-50">
      <h3 className='text-primary text-center'>Todo App using redux react</h3>
      <div className='input-group'>
      <input type='text' className='form-control' value={todotitle} onChange={(e)=>setTodoTitle(e.target.value)}></input>
      <button className='btn btn-primary' onClick={()=>handleAdd()}>ADD</button>
      </div>
      <TodoList/>
    </div>
  );
}

export default App;
