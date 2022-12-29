import React from "react";

function ToyCard({ id, name, image, likes, handleDelete, handlePatch }) {
  function handleDonateClick(event){
    const toyId = event.target.parentNode.id
    fetch(`http://localhost:3001/toys/${toyId}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(d => handleDelete(d))
  }

  function handleLike(event){
    const toyId = event.target.parentNode.id
    const currentLike = parseInt(event.target.value)
    const updatedLike = currentLike + 1
    fetch(`http://localhost:3001/toys/${toyId}`,{
      method: "PATCH",
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(
        {'likes': updatedLike}
      )
    })
    .then(r => r.json())
    .then(d => handlePatch(d))
  }

  return (
    <div className="card" id={id}>
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button
        className="like-btn"
        onClick={handleLike}
        value={likes}
        >Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleDonateClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
