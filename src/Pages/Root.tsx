import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {brands, solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import TopList from "../Components/TopList";

const topPriceData = [
    {
        id: 50,
        icon: <FontAwesomeIcon icon={solid('user-secret')}/>,
        name: "Alien User",
        price: 10000
    },
    {
        id: 60,
        icon: <FontAwesomeIcon icon={solid('car')}/>,
        name: "Cars",
        price: 5000
    },
    {
        id: 70,
        icon: <FontAwesomeIcon icon={brands('facebook')}/>,
        name: "Facebook",
        price: 1000
    },
    {
        id: 80,
        icon: <FontAwesomeIcon icon={brands('twitter')}/>,
        name: "Twitter",
        price: 500
    },
    {
        id: 90,
        icon: <FontAwesomeIcon icon={brands('tiktok')}/>,
        name: "TikTok",
        price: 100
    },
];


const Root = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <TopList title="Things" numOfItems={5} items={topPriceData}/>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
};

export default Root;
