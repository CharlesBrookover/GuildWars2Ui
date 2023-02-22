import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./Components/Sidebar";
import Stack from "react-bootstrap/Stack";
import Header from "./Components/Header";
import {PageContextProvider} from "./Contexts/PageContext";
import {Outlet} from "react-router-dom";
import {PropsChildren} from "./types";
import {ErrorBoundary, FallbackProps} from "react-error-boundary";
import ErrorFallback from "./Components/ErrorFallback";
import AlertMessage from "./Components/AlertMessage";

const App = ({children}: PropsChildren) => {
    return (
        <PageContextProvider>
            <ErrorBoundary fallbackRender={({error}: FallbackProps) => (
                <AlertMessage message={`Something Catastrophic Happened! ${error}`} type="danger" />
            )}>
                <Container fluid>
                    <Row>
                        <Col md={2} className="p-0"><Sidebar /></Col>
                        <Col className="p-0">
                            <Stack>
                                <Header />
                                <ErrorBoundary FallbackComponent={ErrorFallback}>
                                    <main className="overflow-auto m-3">
                                        <Outlet />
                                        {children}
                                    </main>
                                </ErrorBoundary>
                            </Stack>
                        </Col>
                    </Row>
                </Container>
            </ErrorBoundary>
        </PageContextProvider>
    );
};

export default App;
