import React from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Container,
    Row,
    Col
} from "react-bootstrap";


function TopNav() {
    return (
        <Container className='fluid'>
            <Row >
                <Col >
                    <Button className="text-primary" variant="primary">
                        <Link className="link-light" to="/">Home</Link>
                    </Button>
                </Col>
                <Col >
                    <Button className="text-center" variant="primary">
                        <Link className="link-light" to="/characterPage">Build Your Team!</Link>
                    </Button>
                </Col>
                <Col>
                    <Button className="text-center" variant="primary">
                        <Link className="link-light" to="/about">About</Link>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default TopNav;