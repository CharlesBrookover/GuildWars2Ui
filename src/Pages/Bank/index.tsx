import React, {useState} from 'react';
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import './Bank.css';
import Wallet from "./Sections/Wallet";
import {ErrorBoundary} from "react-error-boundary";
import ErrorFallback from "../../Components/ErrorFallback";

const Bank = () => {
    const [activeTab, setActiveTab] = useState<string | undefined>('wallet');

    return (
        <div className="vh-100 bankView">
            <Tab.Container activeKey={activeTab} onSelect={k => setActiveTab(k ?? undefined)}>
                <Row className="m-0">
                    <Col sm={2}>
                        <Nav variant="pills" fill className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="wallet">Wallet</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="bank">Bank</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="material">Material Storage</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col>
                        <ErrorBoundary FallbackComponent={ErrorFallback}>
                            <Tab.Content>
                                <Tab.Pane eventKey="wallet"><Wallet /></Tab.Pane>
                                <Tab.Pane eventKey="bank">Bank</Tab.Pane>
                                <Tab.Pane eventKey="material">Material Storage</Tab.Pane>
                            </Tab.Content>
                        </ErrorBoundary>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
};

export default Bank;
