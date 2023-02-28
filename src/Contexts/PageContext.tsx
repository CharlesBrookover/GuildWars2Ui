import React, {createContext, useContext}          from 'react';
import {PageContextProviderProps, PageContextType} from './types';


const PageContext = createContext<PageContextType | undefined>(undefined);

const usePageContext = () => {
    const context = useContext(PageContext);
    if (context === undefined) {
        throw new Error('usePageContext must be used within a PageContextProvider');
    }

    return context;
};

const PageContextProvider = ({children, contextData}: PageContextProviderProps) => {
    return (<PageContext.Provider value={contextData}>{children}</PageContext.Provider>);
};

const PageContextReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'UPDATE_ICONS':
            return {...state, icons: {...action.icons}};
        default:
            throw new Error('Undefined Action');
    }
}

export {PageContextProvider, usePageContext, PageContextReducer};
