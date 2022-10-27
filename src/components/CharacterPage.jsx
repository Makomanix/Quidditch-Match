import React, { useState, useEffect } from "react";
import CharacterCollection from "./CharacterCollection";
import CharacterForm from "./CharacterForm";
import YourQuidditchTeam from "./YourQuidditchTeam";

function CharacterPage() {
    const [characters, setCharacters] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [yourTeam, setYourTeam] = useState([]);

    useEffect(() => {
        fetch("http://localhost:6001/characters?_sort=name&_order=desc")
            .then((res) => res.json())
            .then((characters) => setCharacters(characters));
    }, []);

    const onAddCharacter = (newCharacter) => {
        setCharacters({ ...characters, newCharacter });
    };

    const charactersToDisplay = characters.filter((character) =>
        character.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleAddCharacter = (charToAdd) => {
        const characterInTeam = yourTeam.find(
            (characters) => characters.id === charToAdd.id
        );
        if (!characterInTeam) {
            setYourTeam([...yourTeam, charToAdd]);
        }
    };

    const handleRemoveCharacter = (characterToRemove) => {
        setYourTeam((yourTeam) =>
            yourTeam.filter((characters) => characters.id !== characterToRemove.id)
        );
    };

    return (
        <>
            <CharacterCollection
                character={charactersToDisplay}
                searchQuery={searchQuery}
                onAddTeam={handleAddCharacter}
                setSearchQuery={setSearchQuery}
            />
            <YourQuidditchTeam
                character={yourTeam}
                onRemoveChar={handleRemoveCharacter}
            />



            <CharacterForm onAddNewChar={onAddCharacter} />

        </>
    );
}
export default CharacterPage;
