// import React, { useState } from "react";
import Character from "./Character";


function CharacterCollection({
    character,
    searchQuery,
    onAddTeam,
    setSearchQuery,
}) {


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
