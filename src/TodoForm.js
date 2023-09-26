import React, { useState } from 'react';

function TodoForm({ todos, setTodos }) {
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (newTodo.trim() === '') {
      alert('Task name cannot be empty.');
      return;
    }

    const newTask = {
      id: todos.length + 1,
      title: newTodo,
      completed: false,
    };

    setTodos([...todos, newTask]);
    setNewTodo('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTodo}
        onChange={handleInputChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
