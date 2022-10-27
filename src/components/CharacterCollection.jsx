import React, { useState } from "react";
import Character from "./Character";
import Container from "react-bootstrap/Container";

function CharacterCollection({
  character,
  searchQuery,
  onAddTeam,
  setSearchQuery,
}) {

  //const [characterIndex, setCharacterIndex] = useState(7);
  // above is for a "show more button"
  const characterCards = character.map((character) => {
    return ( 
      <Character 
        key={character.id}
        id={character.id} 
        character={character}
        onCharClick={onAddTeam} 
      />
      );
    });

  const handleOnChange = (e) => setSearchQuery(e.target.value);

  return (
    <div>
        <div>{characterCards}</div>
        <div>
            <input 
              type="text"
              placeholder="search for character"
              onChange={handleOnChange}
              value={searchQuery} 
            ></input>
        </div>
    </div>
  );
}
export default CharacterCollection;
