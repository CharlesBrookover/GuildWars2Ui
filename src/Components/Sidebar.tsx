import React from 'react';
import {Link} from 'react-router-dom';
import {Dropdown, Nav} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";

const Sidebar = () => {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark min-vh-100">
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span>Guild Wars 2 Thing</span>
            </Link>
            <hr/>
            <Nav className="flex-column mb-auto" defaultActiveKey="/" variant="pills" justify>
                <Nav.Item className="text-start">
                    <Nav.Link href="/" className="text-white">
                        <FontAwesomeIcon icon={solid('house')} fixedWidth className="mx-3"/>
                        Home
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="text-start">
                    <Nav.Link href="/items" className="text-white">
                        <FontAwesomeIcon icon={solid('database')} fixedWidth className="mx-3"/>
                        Item Database
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="text-start">
                    <Nav.Link href="/data" className="text-white">
                        <FontAwesomeIcon icon={solid('chart-column')} fixedWidth className="mx-3"/>
                        Charts
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <hr/>
            <Dropdown drop="up">
                <Dropdown.Toggle id="sidebar_dropdown" variant="dark">
                    <FontAwesomeIcon icon={solid('circle-user')} fixedWidth size="2x" className="mx-3"/>
                    User Name
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/apiKeys">Api Keys</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item href="/signOut">Sign Out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default Sidebar;
