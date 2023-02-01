import React, {ReactNode} from 'react';
import {PageContextProvider} from "../Contexts/PageContext";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Stack} from "react-bootstrap";
import Sidebar from "../Components/Sidebar";

type Props = {
    children: NonNullable<ReactNode>
};

const Layout: React.FC<Props> = ({children}) => {
    return (
        <PageContextProvider>
            <Container fluid>
                <Row>
                    <Col md={2} className="p-0"><Sidebar /></Col>
                    <Col>
                        <Stack>
                            <header>Header</header>
                            <main>{children}</main>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </PageContextProvider>
    );
};

export default Layout;
