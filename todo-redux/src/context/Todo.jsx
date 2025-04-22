import React, { createContext, useEffect, useState } from 'react'

export const TodoContext = createContext(null);

export function Todo(props) {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos').then((response) => {
      return response.json();
    }).then(value => {
      setTodos(value)
    }).catch(err => {
      console.error(err)
    })
  }, [])

  return (
    <TodoContext.Provider value={{todos, setTodos}}>
      {props.children}
    </TodoContext.Provider>
  )
}
