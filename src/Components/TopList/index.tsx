import React from 'react';
import {Card, ListGroup} from "react-bootstrap";
import './TopList.css';

interface TopListProps {
    title: string,
    numOfItems: number
    items: TopListItem[]
}

interface TopListItem {
    id: number,
    icon: any,
    name: string,
    price: number,
}

const TopList = ({title, numOfItems, items}: TopListProps) => {
    return (
        <Card>
            <Card.Header>Top {numOfItems} {title}</Card.Header>
            <ListGroup variant="flush">
                {items.map((item) =>
                    <ListGroup.Item key={item.id} action href={`/database/${item.id}`}>
                        <div className="d-flex">
                            <div className="px-3">{item.icon}</div>
                            <div className="px-3 flex-grow-1">{item.name}</div>
                            <div className="px-3">{item.price}</div>
                        </div>
                    </ListGroup.Item>
                )}
            </ListGroup>
        </Card>
    );
};

export default TopList;
