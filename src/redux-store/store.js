import { createStore } from "redux";
const initialstate={
    todos:[],
    todoId:1,
}

const todoreducer=(prevstate=initialstate,action)=>{
    switch(action.type){
        case "ADD_TODO":
            const newTodo={id:prevstate.todoId, title:action.payload.title}
        return {
            ...prevstate, todos:[...prevstate.todos,newTodo],todoId:prevstate.todoId+1
        }
        case "EDIT_TODO":
        return {
            ...prevstate,todos:prevstate.todos.map(
                (todo)=>todo.id==action.payload.id ?{...todo,title:action.payload.title}
                :todo
                )
        }
        case "DELETE_TODO":
            return {
                ...prevstate,todos:prevstate.todos.filter(
                    (todo)=>todo.id !== action.payload.id
                    )
            }
        default:
            return prevstate;
    }
}
const storetodo=createStore(todoreducer);
export default storetodo
// we created a store here 