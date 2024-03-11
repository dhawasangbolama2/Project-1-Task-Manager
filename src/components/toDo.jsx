import React, { useState } from 'react'
import './toDo.css'; 

function toDo() {
    const [tasks , setTasks] =useState([]);
    const [taskInput, setTaskInput ] =useState('');

    const addTask = () => {
        if(taskInput.trim() != ''){                                    //.trim() trims all the white spaces in the input task and checks if its empty
            setTasks([...tasks,{id:Date.now(), title:taskInput }]);    //It uses the spread operator (...) to create a new array with all the existing tasks (...tasks) and adds a new task object at the end. The new task object has a unique ID generated using Date.now() and a title taken from the taskInput state.
            setTaskInput('');                                          //after the task is set the taskInput is set empty
        } 
    };

    const handleInputChange =(event) => {   //handle changes in the input field for adding tasks. It takes an event parameter, which represents the event change on the input field).
        setTaskInput(event.target.value);   //whenever the user types something into the input field, this function updates the state with the latest value entered by the user.
    
    }
    const toggleTaskCompletion = (id) =>{
      const updatedTasks = tasks.map(task =>
        task.id === id ? {...task, completed: !task.completed }      //If the condition task.id === id evaluates to true, this expression creates a new task object with the spread syntax ({ ...task } copies all properties of the task object) and sets the completed property to the opposite of its current value (toggled)
        :task
        );
        setTasks(updatedTasks);

    }


  return (
    <div className ="todo-container">
        <h1>Todo List</h1>
        <div className='input-container'>
            <input type="text" 
            value = {taskInput}
            onChange={handleInputChange}
            placeholder='Enter a task'
            />
            <button className='button' onClick={addTask}>Add Task</button>
        </div>
        <ul>

        {tasks.map(task => (
    <li key={task.id}>
        <div className="task-container">
            <span className="task-content" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
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
    
  )
}

export default toDo