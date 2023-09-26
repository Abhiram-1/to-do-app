import React, { useState } from 'react';

function TodoItem({ todo, setTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.title);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === todo.id ? { ...prevTodo, title: editedText } : prevTodo
      )
    );
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id !== todo.id));
  };

  const handleCompleteToggle = () => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === todo.id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      )
    );
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#888' : 'inherit',
            }}
          >
            {todo.title}
          </span>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleCompleteToggle}
          />
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;