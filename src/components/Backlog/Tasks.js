  import React, { useState } from 'react'
  
  const Tasks = () => {
    const [todos, setTodos] = useState([
    {
      content: 'Feed dog',
      isCompleted: true,
    },
    {
      content: 'Do dishes',
      isCompleted: false,
    },
    {
      content: 'Complete project',
      isCompleted: false,
    }
  ]);
  } 

export default Tasks;
