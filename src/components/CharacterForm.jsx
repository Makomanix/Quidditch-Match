import React from "react";
import { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";


const initialState = {
    name: "",
    house: "",
    ancestry: "",
    image: "",
};

function CharacterForm({ onAddMovie }) {
    const [formData, setFormData] = useState(initialState);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newCharacter = {
            name: formData.name,
            house: formData.house,
            ancestry: formData.ancestry,
            image: formData.image,
        };
        fetch("http://localhost:6001/characters", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCharacter),
        })
            .then((res) => res.json())
            .then((newCharacter) => {
                onAddMovie(newCharacter);
            });
    };

    return (
        <Container className="my-3">
            <Form
                className="form border rounded  "
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <Form.Group className="my-3 mx-3">
                    <h3>Add Your Own Character</h3>
                    <Row>
                        <Col>
                            <Form.Label htmlFor="name">Your Character Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Character Name"
                                onChange={handleChange}
                                value={formData.name}
                            />
                        </Col>
                        <Col>
                            <Form.Label htmlFor="house">House</Form.Label>
                            <Form.Control
                                className=""
                                type="date"
                                id="house"
                                name="house"
                                placeholder="Your House"
                                onChange={handleChange}
                                value={formData.house}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor="image">Image</Form.Label>
                            <Form.Control
                                type="text"
                                id="image"
                                name="image"
                                placeholder="Your Character Image"
                                onChange={handleChange}
                                value={formData.image}
                            />
                        </Col>
                    </Row>
                    <Form.Label htmlFor="ancestry">Your Ancestry</Form.Label>
                    <Form.Control
                        className="my-3"
                        as="textarea"
                        rows={3}
                        id="ancestry"
                        name="ancestry"
                        placeholder="Your Ancestry"
                        onChange={handleChange}
                        value={formData.ancestry}
                    />
                    <Button type="submit" class="my-3">
                        Add Character
                    </Button>
                </Form.Group>
            </Form>

        </Container>
    );
}

export default CharacterForm;
