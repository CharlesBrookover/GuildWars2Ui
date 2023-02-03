import React from 'react';
import {useParams} from "react-router-dom";

const Database = () => {
    const params = useParams();

    console.log(params);
    return (
        <div>
            This will be the database search page
            {params ? <h1>{params.itemid}</h1> : <span>x</span>}
        </div>
    );
};

export default Database;
