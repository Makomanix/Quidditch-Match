import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
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
            (characters) => characters.id === charactersToAdd.id
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
        <Switch>
            <Route exact path={["/characters"]}>
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
            </Route>

            <Route path="/characters/new">
                <CharacterForm onAddNewChar={onAddCharacter} />
            </Route>
        </Switch>
    );
}
export default CharacterPage;
