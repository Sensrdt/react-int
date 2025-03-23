import React, { useContext } from 'react'
import { TodoContext } from '../../context/Todo'

export default function TodoList() {
    const {listOfTodos, setListOfTodos} = useContext(TodoContext);
    const handleOnClickDelete = (items) => {
        let filteredValues = listOfTodos.filter((val) => val != items );
        console.log(filteredValues)

        setListOfTodos(filteredValues)
    }
  return (
    <div>
        {
            listOfTodos.map((items, key) => {
                return (
                    <div style={{display: "flex", justifyContent: "space-around"}} key={key}>
                        <li>{items}</li>
                        <span onClick={() => handleOnClickDelete(items)}>delete</span>
                    </div>
                )
            })
        }
    </div>
  )
}
