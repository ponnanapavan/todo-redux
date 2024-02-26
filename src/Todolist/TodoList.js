import {  useSelector } from 'react-redux'
import Todo from './Todo'
const TodoList = () => {
    const data=useSelector(// in this i reterving data from redux 
        (state)=>
        {
           return state.todos
        }
    )
       console.log(data)
  return (
    <ul className='list-group mt-4'>
        {data.map((todo)=>(
            <Todo key={todo.id} id={todo.id} title={todo.title}/>
        ))}
    </ul>
  )
}

export default TodoList
