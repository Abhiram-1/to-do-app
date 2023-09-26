import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [filterCompleted, setFilterCompleted] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    .then((response) => response.json())
    .then((data) => setTodos(data));
  }, []);

  return (
    <div className="App">
    <h1>What's the Plan for Today?</h1>
    <TodoForm todos={todos} setTodos={setTodos} />
    <div>
      <label>
        Show Completed:
        <input
        type="checkbox"
        checked={filterCompleted}
         onChange={() => setFilterCompleted(!filterCompleted)}
          />
      </label>
    </div>
  <TodoList todos={todos} filterCompleted={filterCompleted} setTodos={setTodos} />
  </div>
  );
}

export default App;
