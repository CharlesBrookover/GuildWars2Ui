import React from 'react';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import CardDailyAchievements from "./Components/CardDailyAchievements";
import {ErrorBoundary} from "react-error-boundary";
import ErrorFallback from "../../Components/ErrorFallback";


const Root = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <CardDailyAchievements />
                    </ErrorBoundary>
                </Col>
                <Col>
                    <ErrorBoundary  FallbackComponent={ErrorFallback}>
                        <CardDailyAchievements tomorrow />
                    </ErrorBoundary>
                </Col>
            </Row>
        </Container>
    );
};

export default Root;
