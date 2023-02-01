import React from 'react';
import {useRouteError} from 'react-router-dom';
import Layout from "./Layout";

const ErrorPage = () => {

    const error: any = useRouteError();

    return (
        <Layout>
            <div>
                <h1>Ooops!</h1>
                <p>Something has happened and no one knows what!!!!</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </Layout>
    );
};

export default ErrorPage;
