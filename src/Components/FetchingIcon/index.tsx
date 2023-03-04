import {solid}             from '@fortawesome/fontawesome-svg-core/import.macro';
import {FontAwesomeIcon}   from '@fortawesome/react-fontawesome';
import React               from 'react';
import {FetchingIconProps} from './types';


const FetchingIcon = ({size}: FetchingIconProps) => {
    return <FontAwesomeIcon icon={solid('cogs')} fixedWidth spinPulse size={size ?? 'lg'} />
};

export default FetchingIcon;
