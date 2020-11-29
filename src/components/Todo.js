import React, { useState } from 'react';
import TodoForm from './TodoForm';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.completed ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        <button className="btn-circle task-btn">
        <i className="fa fa-circle-o"></i></button>
        {todo.title.slice(0, 23)}
        
      </div>
      <div className='icons'>
       
        <button className="btn-edit task-btn" onClick={() => setEdit({ id: todo.id, value: todo.title })}>
          <i className="fa fa-pencil"></i>
        </button>
        <button className="btn-delete task-btn" onClick={() => removeTodo(todo.id)}>
        <i className="fa fa-trash-o"></i>
        </button>
        
      </div>
    </div>
  ));
};

export default Todo;
