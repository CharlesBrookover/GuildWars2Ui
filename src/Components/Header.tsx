import React from 'react';
import {Button, Form, Navbar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

const Header = () => {
    return (
        <header>
            <Navbar bg="light" variant="light" className="px-3">
                    <Form className="d-flex me-auto">
                        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                        <Button variant="outline-dark">Search</Button>
                    </Form>
                    <Navbar.Text>
                        <FontAwesomeIcon icon={solid('user')} fixedWidth className="mx-3" size="lg"/>
                    </Navbar.Text>
            </Navbar>
        </header>
    );
};

export default Header;
