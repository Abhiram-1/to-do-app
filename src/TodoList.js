import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, filterCompleted, setTodos }) {
  const filteredTodos = filterCompleted
    ? todos.filter((todo) => todo.completed)
    : todos;

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </ul>
  );
}

export default TodoList;