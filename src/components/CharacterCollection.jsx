import { Container, Row, Col } from "react-bootstrap";
import Character from "./Character";


function CharacterCollection({
    characters,
    searchQuery,
    onAddTeam,
    setSearchQuery,
}) {


    const characterCards = characters.map((character) => {
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
        <Container >
                <div>
                    <input
                        type="text"
                        placeholder="search for character"
                        onChange={handleOnChange}
                        value={searchQuery}
                    ></input>
                </div>
            <div>{characterCards}</div>
        </Container>
    );
}
export default CharacterCollection;
