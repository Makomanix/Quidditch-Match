import React from "react";
import { Link } from "react-router-dom";
import {
    Button,
    ButtonGroup,
    Container
} from "react-bootstrap";


function TopNav() {
    return (
        <Container className="text-center">
            <Button className="text-center" variant="secondary">
                <Link to="/">Home</Link>
            </Button>
            <Button className="text-center" variant="secondary">
                <Link to="/characterPage">Build Your Team!</Link>
            </Button>
            <Button className="text-center" variant="secondary">
                <Link to="/about">About</Link>
            </Button>
        </Container>
    );
}

export default TopNav;