import React, { useState } from "react";
import Character from "./Character";
import Container from "react-bootstrap/Container";

function CharacterCollection({
    character,
    searchQuery,
    onAddTeam,
    setSearchQuery,
}) {
    const [characterIndex, setCharacterIndex] = useState(7);
    const characterCards = characters
        .slice(0, characterIndex)
        .map((character) => {
            return <Character key={character.id} character={character} />;
        });
}
export default CharacterCollection;
