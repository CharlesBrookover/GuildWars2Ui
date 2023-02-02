import React from 'react';
import {ReactComponent as Gw2Logo} from '../Assets/Guild_Wars_2_logo.svg';

const Root = () => {
    return (
        <div>
            <h1>This is the Root Route</h1>
            <div style={{height: '50px', width: '50px'}}>
                <Gw2Logo width="100%" height="100%"/>
            </div>
        </div>
    );
};

export default Root;
