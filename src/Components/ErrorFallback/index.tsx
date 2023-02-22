import React from 'react';
import {FallbackProps} from "react-error-boundary";
import AlertMessage from "../AlertMessage";

const ErrorFallback = ({error, resetErrorBoundary}: FallbackProps) => {
    return (
        <div>
            <AlertMessage message={error.message} type='danger' reload reloadHandler={resetErrorBoundary} />
        </div>
    );
};

export default ErrorFallback;
