import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    color: '',
    height: '',
    width: ''
  }
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { color, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [color]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(INITIAL_STATE)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color</label>
      <input
        id="color"
        type="text"
        name="color"
        placeholder="Box Color"
        value={formData.color}
        onChange={handleChange}
      />
      <label htmlFor="height">Height:{formData.height}</label>
      <input
        id="height"
        type="text"
        name="height"
        placeholder="Box Height"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="width">Width:{formData.width}</label>
      <input
        id="width"
        type="text"
        name="width"
        placeholder="Box Width"
        value={formData.width}
        onChange={handleChange}
      />
      <button>Add Box</button>
    </form>
  )

}

export default NewBoxForm;


