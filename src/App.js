import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  Container,
  Button,
  Row,
  Col,
  Navbar,
  ButtonGroup,
} from "react-bootstrap";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import CharacterPage from "./components/CharacterPage";
import CharacterForm from "./components/CharacterForm";
import CharacterCollection from "./components/CharacterCollection";

function App() {
  return (
    <Container className="App">
      <Navbar className="fluid" bg="success" expand="md" variant="light">
        <h1>Quidditch Rumble</h1>
        <Row>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">
              <Link to="/">Home</Link>
            </Button>
            <Button variant="secondary">
              <Link to="/characterPage">Build Your Team!</Link>
            </Button>
            <Button variant="secondary">
              <Link to="/about">About</Link>
            </Button>
          </ButtonGroup>
        </Row>
      </Navbar>
      <CharacterForm />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="characterPage" element={<CharacterPage />} />
      </Routes>
    </Container>
  );
}

export default App;
