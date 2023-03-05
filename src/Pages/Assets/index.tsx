import React, {useState} from 'react';
import {TabContainer}    from 'react-bootstrap';
import Nav               from 'react-bootstrap/Nav';
import Row               from 'react-bootstrap/Row';
import Tab               from 'react-bootstrap/Tab';
import Tabs              from 'react-bootstrap/Tabs';
import {ErrorBoundary}   from 'react-error-boundary';
import ErrorFallback     from '../../Components/ErrorFallback';
import './Assets.css';
import Bank              from './Sections/Bank';
import Wallet            from './Sections/Wallet';

const AssetsPage = () => {
    const [activeTab, setActiveTab] = useState<string | undefined>('wallet');

    return (
        <div className="assetView d-flex flex-column vh-100 px-3 pb-3">
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Tab.Container defaultActiveKey="wallet" onSelect={k => setActiveTab(k ?? undefined)}>
                    <Row>
                        <Nav variant="tabs" fill>
                            <Nav.Item><Nav.Link eventKey="wallet">Wallet</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="bank">Bank</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link eventKey="material">Material Storage</Nav.Link></Nav.Item>
                        </Nav>
                    </Row>
                    <Row className="flex-grow-1 overflow-auto p-1">
                        <Tab.Content>
                            <Tab.Pane eventKey="wallet"><Wallet /></Tab.Pane>
                            <Tab.Pane eventKey="bank"><Bank /></Tab.Pane>
                            <Tab.Pane eventKey="material">Material Storage</Tab.Pane>
                        </Tab.Content>
                    </Row>
                </Tab.Container>
                {/*<Tabs activeKey={activeTab} onSelect={k => setActiveTab(k ?? undefined)} fill>*/}
                {/*    <Tab eventKey="wallet" title="Wallet">*/}
                {/*        <Wallet />*/}
                {/*    </Tab>*/}
                {/*    <Tab eventKey="bank" title="Bank">*/}
                {/*        <div className="mt-3 p-3">*/}
                {/*            <Bank />*/}
                {/*        </div>*/}
                {/*    </Tab>*/}
                {/*    <Tab eventKey="material" title="Material Storage">*/}
                {/*        <div className="mt-3 p-3">Material Storage</div>*/}
                {/*    </Tab>*/}
                {/*</Tabs>*/}
            </ErrorBoundary>
        </div>
    );
};

export default AssetsPage;
