import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleDelete, handlePatch }) {
  const toyList = toys.map(toy => {
    return (
      <ToyCard
        name={toy.name}
        image={toy.image}
        likes={toy.likes}
        key={toy.id}
        id={toy.id}
        handleDelete={handleDelete}
        handlePatch={handlePatch}
      />
    )
  })

  return (
    <div id="toy-collection">
      {/* Render the collection of ToyCards */}
      {toyList}
    </div>
  );
}

export default ToyContainer;
