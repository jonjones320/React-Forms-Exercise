import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box"
import NewBoxForm from "./NewBoxForm";


const BoxList = () => {
  const INITIAL_STATE = [
    { id: uuid(), color: 'Orange', width: 50, height: 50 },
    { id: uuid(), color: 'Green', width: 50, height: 50 }
  ]
  const [boxes, setBoxes] = useState(INITIAL_STATE);
  const addBox = (newBox) => {
    setItems(boxes => [...boxes, { ...newBox, id: uuid() }])
  }

  const removeBox = (id) => {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  }

  return (
    <div>
      <h3>Box List</h3>
      <NewBoxForm addBox={addBox} />
      <div>
        {boxes.map(({ id, color, width, height }) => 
          <Box 
            id={id} 
            color={color} 
            width={width} 
            height={height}
            removeBox={removeBox} 
            key={id} 
          />
        )}
      </div>
    </div>
  )

}

export default BoxList;


