import {SizeProp}        from '@fortawesome/fontawesome-svg-core';
import {solid}           from '@fortawesome/fontawesome-svg-core/import.macro';
import {IconName}        from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React             from 'react';

interface LoadingIconProps {
    size?: SizeProp,
    name?: IconName
}

const LoadingIcon = ({size, name}: LoadingIconProps) => {
    const iconName = name ?? 'spinner';
    return (
        <FontAwesomeIcon icon={iconName} fixedWidth spin size={size ?? "3x"} />
    );
};

export default LoadingIcon;
