import React, { createContext, useState } from 'react'

export const TodoContext = createContext(null);

export const TodoProvider = (props) => {
    const [listOfTodos, setListOfTodos] = useState([]);
    console.log(props)
  return (
    <TodoContext.Provider value={{listOfTodos, setListOfTodos}}>
        {props.children}
    </TodoContext.Provider>
  )
}
