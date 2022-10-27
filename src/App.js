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
import TopNav from "./components/TopNav";

function App() {
  return (
    <Container className="App">
      <Navbar className="fluid" bg="success" expand="sm" variant="light">
        <h1>Quidditch Rumble</h1>
        <Row>
          <TopNav />
        </Row>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="characterPage" element={<CharacterPage />} />
        <Route path="addPlayer" element={<CharacterForm />} />
      </Routes>
    </Container>
  );
}

export default App;
