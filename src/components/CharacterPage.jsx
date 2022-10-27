import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import CharacterCollection from "./CharacterCollection";
import CharacterForm from "./CharacterForm";
import YourQuidditchTeam from "./YourQuidditchTeam";

function CharacterPage() {
    const [characters, setCharacters] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [yourTeam, setYourTeam] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false)

    useEffect(() => {
        fetch("http://localhost:6001/characters")
            .then((res) => res.json())
            .then((characters) => setCharacters(characters));
    }, []);

    const onAddCharacter = (newCharacter) => {
        setCharacters([...characters, newCharacter]);
    };

    const charactersToDisplay = characters.filter((character) =>
        character.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleAddTeammate = (charToAdd) => {
        const characterInTeam = yourTeam.find(
            (characters) => characters.id === charToAdd.id
        );
        if (!characterInTeam) {
            setYourTeam([...yourTeam, charToAdd]);
        }
    };

    const handleRemoveTeammate = (characterToRemove) => {
        setYourTeam((yourTeam) =>
            yourTeam.filter((characters) => characters.id !== characterToRemove.id)
        );
    };
    console.log(characters)
    return (
        <>
            <Button onClick={() => setShowAddForm(true)}>Add A New Character</Button>

            {showAddForm && <CharacterForm setShowAddForm={setShowAddForm} onAddCharacter={onAddCharacter}
            />}

            <YourQuidditchTeam
                character={yourTeam}
                onRemoveTeam={handleRemoveTeammate}
            />
            <div>
                <h1>"CLICK SOMEONE TO ADD THEM TO YOUR TEAM"</h1>
            </div>
            <CharacterCollection
                characters={charactersToDisplay}
                searchQuery={searchQuery}
                onAddTeam={handleAddTeammate}
                setSearchQuery={setSearchQuery}
            />
        </>
    );
}

export default CharacterPage;
