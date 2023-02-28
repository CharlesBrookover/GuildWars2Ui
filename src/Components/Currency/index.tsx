import {solid}                          from '@fortawesome/fontawesome-svg-core/import.macro';
import {FontAwesomeIcon}                from '@fortawesome/react-fontawesome';
import React, {useEffect, useState}     from 'react';
import Image                            from 'react-bootstrap/Image';
import {usePageContext}                 from '../../Contexts/PageContext';
import useApiQueries                    from '../../Hooks/useApiQueries';
import {DurationInMs}                   from '../../Services/Dates';
import {ApiCurrencies}                  from '../../Types/Api/Bank';
import './Currency.css';
import {CoinLayoutProps, CurrencyProps} from './types';

const Currency = ({value, name}: CurrencyProps) => {
    const [currencyIcon, setCurrencyIcon] = useState<string>('');

    const context = usePageContext();

    const {data} = useApiQueries<ApiCurrencies[]>(
        {
            endpoint: '/currencies', parameters: {ids: 'all'}, queryConfig: {staleTime: DurationInMs({days: 7})}
        });

    useEffect(() => {
        if (data) {
            setCurrencyIcon(() => {
                const currency = data.find(item => item.name === name);
                return currency ? currency.icon : '';
            })
        }
    }, [data]);

    return (
        <>
            {name === 'Coin'
             ?  <div className="d-flex">
                 <div className="me-1">
                     <span className="pe-1">{value.toString().slice(0, -4)}</span>
                     <span><CurrencyIcon icon={context.icons?.goldCoin ?? ''} name="Gold Coin" /></span>
                 </div>
                 <div className="me-1">
                     <span className="pe-1">{value.toString().slice(-4, -2)}</span>
                     <span><CurrencyIcon icon={context.icons?.silverCoin ?? ''} name="Silver Coin" /></span>
                 </div>
                 <div>
                     <span className="pe-1">{value.toString().slice(-2)}</span>
                     <span><CurrencyIcon icon={context.icons?.copperCoin ?? ''} name="Copper Coin" /></span>
                 </div>
             </div>
             :
             <div className="d-flex">
                 <div>{value.toLocaleString()}</div>
                 <div className="ms-2 currencyIcon">
                   <CurrencyIcon icon={currencyIcon} name={name} />
                 </div>
             </div>
            }
        </>
    );
};


const CurrencyIcon = ({icon, name}: { icon: string, name: string }) => {

    return <>
        {icon
         ? <Image src={icon} title={name} className="currencyIcon" />
         : <FontAwesomeIcon icon={solid('question')} fixedWidth size="xs" />
        }
    </>
}

export default Currency;
