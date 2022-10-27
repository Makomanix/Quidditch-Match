import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Character from './Character';

function YourQudditchTeam({ character, onRemoveChar }) {
    if (character === []) {
        return null;
    }

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
        <Container fluid="md">
            <Row>
                <div>{characterCards}</div>
            </Row>
        </Container>
    );
}
export default YourQudditchTeam;