import React from "react";

function Character({id, character, onCharClick}) {
 const {name, house, ancestry, image} = character;

  const handleClick = () => {
    onCharClick(character)
  }


  return(
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <div className="header">
        {name}
      </div>
      <div>
        {house}
      </div>
      <div>
        {ancestry}
      </div>
      <button onClick={handleClick}></button>
    </div>
  )
}

export default Character;