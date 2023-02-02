import React from 'react';
import {Link} from 'react-router-dom';
import {Nav} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {ReactComponent as Gw2Logo} from '../Assets/Guild_Wars_2_logo.svg';

const Sidebar = () => {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-secondary min-vh-100">
            <div className="m-0 p-0 d-flex justify-content-center">
                <div style={{width: '140px'}} className="bg-white rounded-3 ">
                    <Link to="/"
                          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <Gw2Logo width="100%" height="100%"/>
                    </Link>
                </div>
            </div>
            <hr/>
            <Nav className="flex-column mb-auto" defaultActiveKey="/" variant="pills" justify>
                <Nav.Item className="text-start">
                    <Nav.Link href="/" className="text-white">
                        <FontAwesomeIcon icon={solid('house')} fixedWidth className="mx-3"/>
                        <span>Home</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="text-start">
                    <Nav.Link href="/items" className="text-white">
                        <FontAwesomeIcon icon={solid('database')} fixedWidth className="mx-3"/>
                        <span>Item Database</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="text-start">
                    <Nav.Link href="/data" className="text-white">
                        <FontAwesomeIcon icon={solid('chart-column')} fixedWidth className="mx-3"/>
                        <span>Charts</span>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <hr/>
            <Nav className="flex-column">
                <Nav.Item className="text-start">
                    <Nav.Link href="/apiKeys" className="text-white">
                        <FontAwesomeIcon icon={solid('key')} fixedWidth className="mx-3"/>
                        <span>Api Keys</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="text-start">
                    <Nav.Link href="/signout" className="text-white">
                        <FontAwesomeIcon icon={solid('arrow-right-from-bracket')} fixedWidth className="mx-3"/>
                        <span>Sign Out</span>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Sidebar;
