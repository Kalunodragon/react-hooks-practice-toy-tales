import React, { useState } from "react";

function ToyForm({ post }) {
  const [newToy, setNewToy] = useState({
    'name': '',
    'image': '',
    'likes': 0
  })

  function handleSubmit(e){
    e.preventDefault()
    const API = 'http://localhost:3001/toys'

    fetch(API, {
      method: "POST",
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(newToy)
    })
    .then(r => r.json())
    .then(d => post(d))

    setNewToy({
      'name': '',
      'image': '',
      'likes': 0
    })
  }

  function handleChange(e) {
    const keyName = e.target.name
    const value = e.target.value
    setNewToy({ ...newToy, [keyName]: value })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
