import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

// App is parent to Header/ToyForm/ToyContainer
// ToyContainer is parent to ToyCard

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  const API = 'http://localhost:3001/toys'

  useEffect(() => {
    load()
  }, [])

  function load(){
    fetch(API)
    .then(r => r.json())
    .then(d => setToys(d))
  }

  function post(newToy){
    setToys(list => [...list, newToy])
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleDelete(toyToDelete){
    const newList = toys.filter(toy => toy.id !== toyToDelete.id)
    setToys(newList)
    load()
  }

  function handlePatch(updatedToy){
    const updatedList = toys.map((toy) => 
      toy.id === updatedToy.id ? updatedToy : toy
    )
    setToys(updatedList)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm post={post}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}
        handleDelete={handleDelete}
        handlePatch={handlePatch}
      />
    </>
  );
}

export default App;
