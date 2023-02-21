import React, {createContext, useContext} from 'react';
import {userData, UserType} from "../data/userData";

type PageContextType = {
    user?: UserType
};

type PageContextProviderProps = {
    children: React.ReactNode
};

const contextData = {
    user: userData
}

const PageContext = createContext<PageContextType | undefined>(undefined);

const usePageContext = () => {
    const context = useContext(PageContext);
    if (context === undefined) {
        throw new Error('usePageContext must be used within a PageContextProvider');
    }

    return context;
};

const PageContextProvider = ({children}:PageContextProviderProps) => {
    return (<PageContext.Provider value={contextData}>{children}</PageContext.Provider>);
};

export {PageContextProvider, usePageContext};
