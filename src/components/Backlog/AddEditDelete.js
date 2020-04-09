import { useState } from 'react';
import Tasks from './Tasks'


  const [todos, setTodos] = useState(
  Tasks);

 const handleKeyDown = (e, i) => {
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

const updateTodo = (e, i) => {
  const newTodos = [...todos];
  newTodos[i].content = e.target.value;
  setTodos(newTodos);
}

const toggle = (i) => {
  const temporaryTodos = [...todos];
  temporaryTodos[i].isCompleted=!temporaryTodos[i].isCompleted;
  setTodos(temporaryTodos);
}

export { toggle, updateTodo, handleKeyDown}
