import React, { useContext } from 'react'
import { TodoContext } from '../context/Todo';
import useFetchTodos from '../hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../store/todoSlice';

export default function ListTodo() {
    useFetchTodos();
    const todos = useSelector((state) => state.todos.items);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(removeTodo(id))
    }

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
        {
            todos?.map((val) => {
                return <div style={{display:"flex", justifyContent: "space-between", border: "1px solid white", padding: "10px", margin: "2px"}} key={val.id}>
                    <span>{val.title}</span>
                    <button onClick={() => handleDelete(val.id)}>delete</button>
                </div>
            })
        }
    </div>
  )
}
