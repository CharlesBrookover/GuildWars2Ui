import React, {useEffect, useState} from 'react';
import Col                          from 'react-bootstrap/Col';
import Image         from 'react-bootstrap/Image';
import useApiQueries from '../../Hooks/useApiQueries';
import {ApiItem}     from '../../Types/Api/Item';
import LoadingIcon   from '../LoadingIcon';
import {ItemProps}   from './types';

const Item = ({bankSlot}: ItemProps) => {

    const {data, isLoading} = useApiQueries<ApiItem<any>>({
                                                              endpoint:   '/items',
                                                              parameters: {id: bankSlot.id}
                                                          });

    const [borderColor, setBorderColor] = useState<string>('dark');

    useEffect(() => {
        const color = {
            'Legendary': 'border-primary',
            'Ascended': 'border-primary',
            'Exotic': 'border-warning',
            'Rare': 'border-danger',
            'Masterwork': 'border-success',
            'Fine': 'border-primary',
            'Basic': 'border-secondary',
            'Junk': 'border-light'
        }[data?.rarity || 'Basic'];
        setBorderColor(color);
    }, [data]);
    return (
        <>
            {isLoading
             ? <LoadingIcon />
             : <Col className={`border ${borderColor}`}>
                 <div><Image src={data?.icon} /></div>
                 <div>{bankSlot.count}</div>
             </Col>
            }
        </>
    );
};

export default Item;
