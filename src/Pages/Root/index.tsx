import React from 'react';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import CardDailyAchievements from "./Components/CardDailyAchievements";


const Root = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <CardDailyAchievements/>
                </Col>
                <Col>
                    <CardDailyAchievements tomorrow/>
                </Col>
            </Row>
        </Container>
    );
};

export default Root;
