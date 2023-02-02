import React from 'react';
import Layout from "./Layout";
import {ReactComponent as Gw2Logo} from '../Assets/Guild_Wars_2_logo.svg';

const Root = () => {
    return (
        <Layout>
            <div>
                <h1>This is the Root Route</h1>
                <div style={{height: '50px', width: '50px'}}>
                <Gw2Logo width="100%" height="100%"/>
                </div>

            </div>
        </Layout>
    );
};

export default Root;
