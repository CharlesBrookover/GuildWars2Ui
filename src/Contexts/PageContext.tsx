import React, {createContext, useContext} from 'react';
import {UserType}                         from "../_data/userData";

export interface PageContextType {
    user?: UserType
}

interface PageContextProviderProps {
    children: React.ReactNode,
    contextData: PageContextType
}

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

export {PageContextProvider, usePageContext};
