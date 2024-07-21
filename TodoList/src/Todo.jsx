import React from "react";

const Item = ({ id, task, removeTodo }) => {

const deleteTask = () => {removeTodo(id)};

  return (
    <div id={ id } className="Todo-Main">
      <span>{ task }</span>
        <button 
          onClick={deleteTask}
          className="Todo-Delete-Button">
          X
        </button>
    </div>
  )
}

export default Item;


