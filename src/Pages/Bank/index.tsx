import React, {useState} from 'react';
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import './Bank.css';

const Bank = () => {
    const [activeTab, setActiveTab] = useState<string | undefined>();

    return (
        <div className="vh-100 bankView">
            <Tab.Container activeKey={activeTab} onSelect={k => setActiveTab(k ?? undefined)}>
                <Row className="m-0">
                    <Col sm={2}>
                        <Nav variant="pills" fill className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="bank">Bank</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="material">Material Storage</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col>
                        <Tab.Content>
                            <Tab.Pane eventKey="bank">Bank</Tab.Pane>
                            <Tab.Pane eventKey="material">Material Storage</Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>        // <Tabs activeKey={activeTab} onSelect={k => setActiveTab(k ?? undefined)} className="mb-3">
        //     <Tab eventKey="bank" title="Bank">Bank Tab</Tab>
        //     <Tab eventKey="material" title="Material Storage">Material Storage Tab</Tab>
        // </Tabs>
    );
};

export default Bank;
