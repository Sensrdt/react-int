import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodos } from '../store/todoSlice';

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!newTodo.trim()) return;

    dispatch(addTodos(newTodo));
    setNewTodo('');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '10px' }}>
      <div>
        <label>Todo title:</label>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
