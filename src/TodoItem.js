import React, { useState } from 'react';

function TodoItem({ todo, setTodos, taskNumber }) {
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
    <li className="todo-item">
      <div className="task-number">{taskNumber}.</div>
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
          <div
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#888' : 'inherit',
            }}
          >
            {todo.title}
          </div>
          <div className="button-group">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={handleCompleteToggle}
            />
            <button className="edit-button" onClick={handleEditClick}>Edit</button>
            <button className="delete-button" onClick={handleDeleteClick}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
