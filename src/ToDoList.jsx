import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "go to gym",
    "go for shopping",
    "go to lab",
  ]);

  const [newTask, setNewTask] = useState("");

  function handleInput(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function updateTask(){
        
  }

  return (
    <div className="todo">
      <h1>MY TODO'S</h1>
      <div>
        <input
          type="text"
          placeholder="Add Task "
          value={newTask}
          onChange={handleInput}
        />
        <button className="add-btn" onClick={addTask}>
          ADD
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="deletebtn" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="updatebtn" onClick={()=> updateTask} >Update</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
