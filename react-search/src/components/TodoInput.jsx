import React, { useContext, useState } from 'react'
import { TodoContext } from '../../context/Todo';

export default function TodoInput() {
    const {_, setListOfTodos} = useContext(TodoContext);
    const [todoDesc, setTodoDesc] = useState("");
    const handleSaveTodos = () => {
        console.log(todoDesc)
        setListOfTodos(prev =>  [...prev, todoDesc])
    }
  return (
    <div>
        <h2>Todo Input</h2>
        <input type="text" value={todoDesc} placeholder='enter your todo desc' onChange={(e) => setTodoDesc(e.target.value)}/>
        <button onClick={() => handleSaveTodos()}>Click to Add</button>
    </div>
  )
}
