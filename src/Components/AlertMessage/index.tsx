import React from 'react';
import {AlertMessageProps} from "./types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const AlertMessage = ({message, type = 'danger', reload, reloadHandler}: AlertMessageProps) => {

    return (
        <Alert variant="danger" className="d-flex justify-content-start align-items-center">
            <div>
                {{
                    info: <FontAwesomeIcon icon={solid('info')} fixedWidth size="2xl" />,
                    warning: <FontAwesomeIcon icon={solid('hand')} fixedWidth size="2xl" />,
                    success: <FontAwesomeIcon icon={solid('thumbs-up')} fixedWidth size="2xl" />,
                    danger: <FontAwesomeIcon icon={solid('exclamation-triangle')} fixedWidth size="2xl" />,
                }[type] || ''}
            </div>
            <div className="flex-grow-1">
                <p>{message}</p>
                <hr />
                {reload &&
                    <div className="ms-auto">
                      <Button variant="outline-danger" size="sm" onClick={reloadHandler}>Reload</Button>
                    </div>
                }
            </div>
        </Alert>
    );
};

export default AlertMessage;
