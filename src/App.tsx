import React, { useState } from 'react'
import './App.css'
import { TodoTask } from './Types/todos'

function App() {
  const [todos, setTodos] = useState<TodoTask[]>([])
  const [text, setText] = useState<string>('')

  const handleAddTask = () => {
    if (!text || text.trim() === '') return
    setTodos([
      ...todos,
      { id: new Date().toISOString(), text, completed: false },
    ])
    setText('')
  }
  return (
    <div className="App">
      <label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </label>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                setTodos(
                  todos.map((t) =>
                    t.id === todo.id ? { ...t, completed: !t.completed } : t,
                  ),
                )
              }}
            />
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
