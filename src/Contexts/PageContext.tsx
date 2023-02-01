import React, {createContext, useContext} from 'react';

type PageContextType = {

};

type PageContextProviderProps = {
    children: React.ReactNode
};

const PageContext = createContext<PageContextType | undefined>(undefined);

const usePageContext = () => {
    const context = useContext(PageContext);
    if (context === undefined) {
        throw new Error('usePageContext must be used within a PageContextProvider');
    }

    return context;
};

const PageContextProvider = ({children}:PageContextProviderProps) => {
    return (<PageContext.Provider value={{}}>{children}</PageContext.Provider>);
};

export {PageContextProvider, usePageContext};
