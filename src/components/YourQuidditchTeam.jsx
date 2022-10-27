import React from 'react';
import Character from './Character';

function YourQudditchTeam({ character, onRemoveChar }) {
    if (character === []) {
        return null;
    }
    //const [characterIndex, setCharacterIndex] = useState(7);
    // above is for a "show more button"

    const characterCards = character.map((character) => {
        return (
            <Character
                key={character.id}
                id={character.id}
                character={character}
                onCharClick={onRemoveChar}
            />
        );
    });



    return (
        <div>
            <div>{characterCards}</div>
            <div>
                <input
                    type="text"
                    placeholder="search for character"
                    onChange={handleOnChange}
                ></input>
            </div>
        </div>
    );
}
export default YourQudditchTeam;