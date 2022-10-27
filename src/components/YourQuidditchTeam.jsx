import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Character from './Character';

function YourQudditchTeam({ character, onRemoveTeam }) {
    if (character === []) {
        return null;
    }

    const characterCards = character.map((character) => {
        return (
            <Character
                key={character.id}
                id={character.id}
                character={character}
                onCharClick={onRemoveTeam}
            />
        );
    });



    return (
        <Container fluid="md">
            <Col>
                <div>{characterCards}</div>
            </Col>
        </Container>
    );
}
export default YourQudditchTeam;