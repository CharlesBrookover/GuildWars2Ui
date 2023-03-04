import React                 from 'react';
import Col                   from 'react-bootstrap/Col';
import Row                   from 'react-bootstrap/Row';
import CardDailyAchievements from './Components/CardDailyAchievements';


const RootPage = () => {
    return (
        <Row className="p-3">
            <Col>
                <CardDailyAchievements />
            </Col>
            <Col>
                <CardDailyAchievements tomorrow />
            </Col>
        </Row>
    );
};

export default RootPage;
