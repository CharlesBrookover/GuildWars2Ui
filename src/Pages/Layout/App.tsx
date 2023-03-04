import React, {useEffect, useReducer, useState}  from 'react';
import Col                                       from "react-bootstrap/Col";
import Container                                 from "react-bootstrap/Container";
import Row                                       from "react-bootstrap/Row";
import Stack                                     from "react-bootstrap/Stack";
import {ErrorBoundary, FallbackProps}            from "react-error-boundary";
import {Outlet}                                  from "react-router-dom";
import {userData}                                from '../../_data/userData';
import AlertMessage                              from "../../Components/AlertMessage";
import ErrorFallback                             from "../../Components/ErrorFallback";
import LoadingIcon                               from '../../Components/LoadingIcon';
import {PageContextProvider, PageContextReducer} from "../../Contexts/PageContext";
import {PageContextType}                         from '../../Contexts/types';
import useApiFiles                               from '../../Hooks/useApiFiles';
import Header                                    from "./Header";
import Sidebar                                   from "./Sidebar";
import {PropsChildren}                           from "./types";

const contextData: PageContextType = {
    user: userData
}

const App = ({children}: PropsChildren) => {
    const [pageLoad, setPageLoad] = useState<boolean>(false);

    const [newContextData, dispatch] = useReducer(PageContextReducer, contextData);

    /* "Prefetch" some data that should populate some context data */
    const {isLoading: apiFilesLoading, coinIcons} = useApiFiles();

    useEffect(() => {
        setPageLoad(() => apiFilesLoading);
    }, [apiFilesLoading])

    useEffect(() => {
        dispatch({type: 'UPDATE_ICONS', icons: coinIcons});
    }, [coinIcons]);

    return (
        <PageContextProvider contextData={newContextData}>
            <ErrorBoundary fallbackRender={({error}: FallbackProps) => (
                <AlertMessage message={`Something Catastrophic Happened! ${error}`} type="danger" />
            )}>
                <Container fluid>
                    <Row>
                        <Col md={2} className="px-0"><Sidebar /></Col>
                        <Col className="px-0">
                            <Stack>
                                <Header />
                                <ErrorBoundary FallbackComponent={ErrorFallback}>
                                    {pageLoad
                                     ? <LoadingIcon />
                                     :
                                     <main className="p-3">
                                         <Outlet />
                                         {children}
                                     </main>
                                    }
                                </ErrorBoundary>
                            </Stack>
                        </Col>
                    </Row>
                </Container>
            </ErrorBoundary>
        </PageContextProvider>
    );
};

export default App;
