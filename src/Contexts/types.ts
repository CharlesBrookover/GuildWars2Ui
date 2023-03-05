import React      from 'react';
import {UserType} from '../_data/userData';

export interface PageContextType {
    user?: UserType,
    icons?: PageContextIcons,
    currencies?: object
}

export interface PageContextIcons {
    goldCoin?: string,
    silverCoin?: string,
    copperCoin?: string
}

export interface PageContextProviderProps {
    children: React.ReactNode,
    contextData: PageContextType
}

export interface PageContextReducerActions {
    type: string,
    icons?: PageContextIcons,
    currencies?: object
}
