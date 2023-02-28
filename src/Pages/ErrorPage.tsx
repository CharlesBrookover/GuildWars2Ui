import React from 'react';
import {useRouteError} from 'react-router-dom';
import App             from "./Layout/App";

const ErrorPage = () => {

    const error: any = useRouteError();

    return (
        <App>
            <div className="text-center">
                <h1>Ooops!</h1>
                <p>Something has happened and no one knows what!!!!</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </App>
    );
};

export default ErrorPage;
