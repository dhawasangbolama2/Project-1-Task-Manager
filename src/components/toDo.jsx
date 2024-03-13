import { getToDo, postToDo } from "../api/get-data";
import React, { useEffect, useState } from 'react'
import './toDo.css'; 

function toDo () {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput ] =useState('');

    useEffect(()   => {
      const fetchToDo = async ()=> {
        try{
          const res = await getToDo();
          setTasks(res);
          
        }catch(error){
          console.log(error);

        }
      }
      fetchToDo();
    }, [])

   
    const addTask = async () => {
      if (taskInput.trim() === '') {
        return;
      }
  
      const newTask = {
        title: taskInput,
        completed: false
      };
  
      try {
        const addedTask = await postToDo(newTask);
        addedTask.id = Date.now();
        setTasks((prevTasks) => [addedTask, ...prevTasks]);
        setTaskInput('');
      } catch (error) {
        console.log('Error adding task:', error); 
      }
    };

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };


  const toggleTaskCompletion = (id) =>{
    const updatedTasks = tasks.map(task =>
      task.id === id ? {...task, completed: !task.completed }
      :task
      );
      setTasks(updatedTasks);}
    
     // Delete a task
  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    
  };


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
      
      {/* <GetAlltasks onTasksFetched={handleTasksFetched} /> */}

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
              <button onClick={() => handleDeleteTask(task.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default toDo;