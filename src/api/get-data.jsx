
import React, { useEffect } from 'react';

const GetAlltasks = ({ onTasksFetched }) => {
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        if (!response.ok) {
          throw new Error(`Failed to fetch tasks. Status: ${response.status}`);
        }

        const data = await response.json();
        onTasksFetched(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [onTasksFetched]);


  return null;}

export default GetAlltasks;