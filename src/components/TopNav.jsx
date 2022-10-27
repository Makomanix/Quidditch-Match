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


function TopNav() {
    return (
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">
                <Link to="/">Home</Link>
            </Button>
            <Button variant="secondary">
                <Link to="/characterPage">Build Your Team!</Link>
            </Button>
            <Button variant="secondary">
                <Link to="/addPlayer">Add A Player</Link>
            </Button>
            <Button variant="secondary">
                <Link to="/about">About</Link>
            </Button>
        </ButtonGroup>
    );
}

export default TopNav;