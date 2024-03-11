import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ToDo from './components/toDo.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<ToDo/>}></Route>
     
      
    </Routes>
  );
 
}

export default App