import React           from 'react';
import Alert           from 'react-bootstrap/Alert';
import Card            from 'react-bootstrap/Card';
import {DataCardProps} from './types';

const DataCard = ({title, error, children}: DataCardProps) => {
    return (
        <Card>
            <Card.Header as="h4">{title || 'DataCard'}</Card.Header>
            <Card.Body>
                <>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {children}
                </>
            </Card.Body>
        </Card>
    );
};

export default DataCard;
