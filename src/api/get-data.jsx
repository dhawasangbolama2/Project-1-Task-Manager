

export const getToDo = async () =>{
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const todos = await response.json();
    return todos;
    
  }catch (error)
{
  console.error(error);
}}

export const postToDo =async (newTask) => {
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
          method: 'POST',
          body: JSON.stringify(newTask),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        return await response.json();
        
  }catch(error){
    console.error(error);
  }
  
}

