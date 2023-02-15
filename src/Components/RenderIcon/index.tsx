import React from 'react';
import {IconProps} from './types';
import Image from 'react-bootstrap/Image';

const RenderIcon = ({icon}: IconProps) => {
    return (
        <>
            {(icon instanceof URL || typeof icon === 'string') ?
                <Image fluid src={icon instanceof URL ? icon.href : icon}/> : icon}
        </>
    );
};

export default RenderIcon;
