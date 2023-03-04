import React, {useState} from 'react';
import Tab               from "react-bootstrap/Tab";
import Tabs              from 'react-bootstrap/Tabs';
import {ErrorBoundary}   from "react-error-boundary";
import ErrorFallback     from "../../Components/ErrorFallback";
import './Bank.css';
import Wallet            from "./Sections/Wallet";

const Bank = () => {
    const [activeTab, setActiveTab] = useState<string | undefined>('wallet');

    return (
        <div className="vh-100 bankView">
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Tabs activeKey={activeTab} onSelect={k => setActiveTab(k ?? undefined)} fill>
                    <Tab eventKey="wallet" title="Wallet">
                        <div className="mt-3 p-3">
                            <Wallet />
                        </div>
                    </Tab>
                    <Tab eventKey="bank" title="Bank">
                        <div className="mt-3 p-3">Bank</div>
                    </Tab>
                    <Tab eventKey="material" title="Material Storage">
                        <div className="mt-3 p-3">Material Storage</div>
                    </Tab>
                </Tabs>
            </ErrorBoundary>
        </div>
    );
};

export default Bank;
