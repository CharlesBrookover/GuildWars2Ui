import React from 'react';
import {Button, Form, Navbar} from "react-bootstrap";

const Header = () => {
    return (
        <header>
            <Navbar bg="light" variant="light" className="px-3">
                <Form className="d-flex ms-auto">
                    <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                    <Button variant="outline-dark">Search</Button>
                </Form>
            </Navbar>
        </header>
    );
};

export default Header;
