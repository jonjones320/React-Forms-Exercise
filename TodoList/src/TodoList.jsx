import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm";


const TodoList = () => {
  const [todos, settodos] = useState([]);
  const addTodo = (newTodo) => {
    settodos(todos => [...todos, { ...newTodo, id: uuid() }])
  }

  const removeTodo = (id) => {
    settodos(todos => todos.filter(todo => todo.id !== id));
  }

  return (
    <div>
      <h3>todo List</h3>
      <NewTodoForm addTodo={addTodo} />
      <div>
        {todos.map(({ id, task }) => 
          <todo 
            id={id} 
            task={task} 
            key={id} 
            removeTodo={removeTodo} 
          />
        )}
      </div>
    </div>
  );
};

export default TodoList;


