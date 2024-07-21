import React from "react";

const Item = ({ id, color, width, height }) => {

  return (
    <div 
      id={id} 
      className="Box-Main"
      style={{
        "background-color" : color, 
        "width" : width,
        "height" : height
      }}>
    </div>
  )
}

export default Item;


