import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage';
import Root from './Pages/Root';
import Settings from "./Pages/Settings"
import App from "./App";
import Database from "./Pages/Database";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {path: 'home', element: <Root/>},
            {path: 'settings', element: <Settings/>},
            {path: 'database', element: <Database/>}
        ]
    }
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
