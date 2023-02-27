import React         from 'react';
import Image         from 'react-bootstrap/Image';
import useApiQueries from '../../Hooks/useApiQueries';
import {ApiFiles}    from '../../Types/Api/Files';
import './Currency.css';

interface CurrencyProps {
    value: number,
    name: string,
    icon?: string
}

const Currency = ({value, name, icon}: CurrencyProps) => {

    const {data} = useApiQueries<ApiFiles[]>({endpoint: '/files', parameters: {ids: 'ui_coin_gold,ui_coin_silver,ui_coin_copper'}});
    const goldCoin = data?.find(item => item.id === 'ui_coin_gold');
    const silverCoin = data?.find(item => item.id === 'ui_coin_silver');
    const copperCoin = data?.find(item => item.id === 'ui_coin_copper');

    const strValue = value.toString();
    return (
        <>
            {name === 'Coin'
             ? <div className="d-flex">
                 <div className="me-3">{strValue.slice(0, -4)}<span><Image src={goldCoin?.icon ?? ''} className="currency"/></span></div>
                 <div className="me-3">{strValue.slice(-4, -2)}<span><Image src={silverCoin?.icon ?? ''} className="currency"/></span></div>
                 <div className="me-3">{strValue.slice(-2)}<span><Image src={copperCoin?.icon ?? ''} className="currency"/></span></div>
             </div>
             :
             <div className="d-flex">
                 <div>{value.toLocaleString()}</div>
                 {icon && <div className="ms-2 currency"><Image src={icon} title={name} className="currency"/></div>}
             </div>
            }
        </>

    );
};

export default Currency;
