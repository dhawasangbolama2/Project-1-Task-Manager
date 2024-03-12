import GetAlltasks from "../api/get-data";
import React, { useState } from 'react'
import './toDo.css'; 

function toDo () {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput ] =useState('');

    const addTask = () => {
        if(taskInput.trim() != ''){                                    
            setTasks([...tasks,{id:Date.now(), title:taskInput }]);    
            setTaskInput('');                                          
        } 
    };

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleTasksFetched = (fetchedTasks) => {
        setTasks(fetchedTasks);
    }

  const toggleTaskCompletion = (id) =>{
    const updatedTasks = tasks.map(task =>
      task.id === id ? {...task, completed: !task.completed }
      :task
      );
      setTasks(updatedTasks);}


  return (
    <div className ="todo-container">
        <h1>Todo List</h1>
        <div className='input-container'>
            <input type="text" 
            value = {taskInput}
            onChange={handleInputChange}
            placeholder='Enter a new task'
            />
            <button className='button' onClick={addTask}>Add Task</button>
        </div>
      
      <GetAlltasks onTasksFetched={handleTasksFetched} />

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div className="task-container">
              <span
                className="task-content"
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              >
                {task.title}
              </span>
              <button onClick={() => toggleTaskCompletion(task.id)}>
                {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default toDo;