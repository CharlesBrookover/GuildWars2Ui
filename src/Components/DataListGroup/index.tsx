import React from 'react';
import {ListGroup} from "react-bootstrap";
import DataListGroupProps from "./types";

const DataListGroup = <TData, >({data, variant, renderItem}: DataListGroupProps<TData>) => {

    return (
        <ListGroup variant="flush">
            {data?.map((item, idx) => renderItem(item))}
        </ListGroup>
    );
};

export default DataListGroup;
