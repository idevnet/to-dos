import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import axios from 'axios';

function TodoList() {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
  const [todos, setTodos] = useState(initialState);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=20`).then((res) => {
      const responseTodos = res.data;

      const storedData = localStorage.getItem("tasks")
      if (storedData) {
        //Data item exists, mogu se editovati sa podacima iz State varijable "todos"
        console.log(`Local storage is Not Empty = ${storedData}`);
        console.log(`Local State is Not Empty = ${todos}`);

        localStorage.setItem("tasks", JSON.stringify(todos));
        
      } else {
        //Data item doesn't exist in localStorage, API response se onda setuje u localStorage
        console.log('Local storage is Empty');
        localStorage.setItem("tasks", JSON.stringify(responseTodos));
        setTodos(responseTodos);
      }
      
    });
  }, [todos]);
//Kod svake promjene u State varijabli "todos" poziva se useEffect()
 
  const addTodo = todo => {
    if (!todo.title || /^\s*$/.test(todo.title)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.title || /^\s*$/.test(newValue.title)) {
      //Provjera ispravnosti unosa
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className='todo-header'>
      <button className="btn-navicon task-btn">
        <i className="fa fa-navicon"></i></button>
        <h1>My To-do List:</h1></div>
      
      <div className='todo-list-container'>
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      <TodoForm onSubmit={addTodo} />
      </div>
    </>
  );
}

export default TodoList;
