import React, { useState } from 'react';
import './Backlog.scss';
import ListItem from './ListItem';



function Backlog() {
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

  function handleKeyDown(e, i) {
    if (e.key === 'Enter') {
      createTodo(e, i);
    }
    if (e.key === 'Backspace' && todos[i].content === '') {
      e.preventDefault();
      return removeTodo(i);
    }
  }

  function removeTodo(i) {
    if (i === 0 && todos.length === 1) return;
    setTodos(todos => todos.slice(0, i).concat(todos.slice(i + 1, todos.length)));
    setTimeout(() => {
      if(i > 0) document.forms[0].elements[i - 1].focus();
    }, 0);
  }

  function createTodo(e, i) {
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      content: '',
      isComlpleted: false,
    });
    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }

  function updateTodo(e, i) {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
  }

  function toggle(i) {
    const temporaryTodos = [...todos];
    temporaryTodos[i].isCompleted=!temporaryTodos[i].isCompleted;
    setTodos(temporaryTodos);
  }

  return (
    <div className="backlog">
      <div className="header">
        <h3>Backlog</h3> 
      </div>
      <form className="todo-list">
        <ul>
          {todos.map((todo, i) => (
           <ListItem key={i} todo={todo} toggle={toggle} handleKeyDown={handleKeyDown} updateTodo={updateTodo} i={i} />
          ))}
        </ul>
      </form>
    </div>
  );
}

export default Backlog;
