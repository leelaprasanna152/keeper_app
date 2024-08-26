// TodoList.jsx
import React, { useState } from "react";
import "./task4.1.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const handleCompleteTask = (index) => {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div className="add-task">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="task-section">
        <h2>Incomplete Tasks</h2>
        {incompleteTasks.length === 0 ? (
          <p>No tasks to complete.</p>
        ) : (
          <ul>
            {incompleteTasks.map((t, index) => {
              const originalIndex = tasks.findIndex(
                (task) => task.text === t.text && task.completed === t.completed
              );
              return (
                <li key={index}>
                  <input
                    type="checkbox"
                    checked={t.completed}
                    onChange={() => handleCompleteTask(originalIndex)}
                  />
                  <span>{t.text}</span>
                  <button onClick={() => handleDeleteTask(originalIndex)}>
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="task-section">
        <h2>Completed Tasks</h2>
        {completedTasks.length === 0 ? (
          <p>No completed tasks yet.</p>
        ) : (
          <ul>
            {completedTasks.map((t, index) => {
              const originalIndex = tasks.findIndex(
                (task) => task.text === t.text && task.completed === t.completed
              );
              return (
                <li key={index}>
                  <input
                    type="checkbox"
                    checked={t.completed}
                    onChange={() => handleCompleteTask(originalIndex)}
                  />
                  <span className="completed">{t.text}</span>
                  <button onClick={() => handleDeleteTask(originalIndex)}>
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoList;
