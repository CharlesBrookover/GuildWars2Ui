import {createSyncStoragePersister}          from '@tanstack/query-sync-storage-persister';
import {QueryClient}                         from '@tanstack/react-query';
import {PersistQueryClientProvider}          from '@tanstack/react-query-persist-client';
import React                                 from 'react';
import ReactDOM                              from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import AssetsPage                            from './Pages/Assets';
import Database                              from './Pages/Database';
import ErrorPage                             from './Pages/ErrorPage';
import App                                   from './Pages/Layout/App';
import RootPage                              from './Pages/Root';
import Settings                              from './Pages/Settings';
import reportWebVitals                       from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
                                       {
                                           path:         '/',
                                           element:      <App />,
                                           errorElement: <ErrorPage />,
                                           children:     [
                                               {index: true, element: <RootPage />},
                                               {path: 'assets', element: <AssetsPage />},
                                               {path: 'settings', element: <Settings />},
                                               {
                                                   path:     'database', element: <Database />,
                                                   children: [
                                                       {path: ':itemid'}
                                                   ]
                                               }
                                           ]
                                       }
                                   ]);

const queryClient = new QueryClient({
                                        defaultOptions: {
                                            queries: {
                                                cacheTime: 1000 * 60 * 60 * 24, // 24 hours
                                            }
                                        }
                                    });

const localstoragePersister = createSyncStoragePersister({
                                                             storage: window.localStorage,
                                                             key:     'GW2_REACT_QUERY'
                                                         });

root.render(
    <React.StrictMode>
        <PersistQueryClientProvider client={queryClient} persistOptions={{persister: localstoragePersister}}>
            <RouterProvider router={router} />
        </PersistQueryClientProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


