import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Row, Navbar, Col } from "react-bootstrap";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import CharacterPage from "./components/CharacterPage";
import TopNav from "./components/TopNav";


function App() {
  return (
    <Container className="App">
      <h1>Quidditch Rumble</h1>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="characterPage" element={<CharacterPage />} />
      </Routes>
    </Container>
  );
}

export default App;
