import {solid}            from '@fortawesome/fontawesome-svg-core/import.macro';
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import React              from 'react';
import {LoadingIconProps} from './types';


const LoadingIcon = ({size}: LoadingIconProps) => {
    return (
        <FontAwesomeIcon icon={solid('arrows-spin')} fixedWidth spin size={size ?? '3x'} />
    );
};

export default LoadingIcon;
