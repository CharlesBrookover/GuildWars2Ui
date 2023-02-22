import React from 'react';
import Image from 'react-bootstrap/Image';

interface CurrencyProps {
    value: number,
    name: string,
    icon?: string
}

const Currency = ({value, name, icon}: CurrencyProps) => {


    const strValue = value.toString();
    return (
        <>
            {name === 'Coin'
                ? <>
                    <div className="me-3">G{strValue.slice(0, -4)}</div>
                    <div className="me-3">S{strValue.slice(-4, -2)}</div>
                    <div className="me-3">C{strValue.slice(-2)}</div>
                </>
                :
                <>
                    {value.toLocaleString()} {icon &&
                    <div style={{width: "16px"}} className="ms-2"><Image src={icon} title={name} /></div>}
                </>
            }
        </>

    );
};

export default Currency;
