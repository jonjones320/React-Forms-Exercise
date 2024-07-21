import React from "react";

const Item = ({ id, color, width, height, removeBox }) => {

const deleteBox = () => {removeBox(id)};

  return (
    <div 
      id={id} 
      className="Box-Main"
      style={{
        "background-color" : color, 
        "width" : width,
        "height" : height
      }}>
        <button 
          onClick={deleteBox}
          className="Box-Delete-Button">
            X
        </button>
    </div>
  )
}

export default Item;


