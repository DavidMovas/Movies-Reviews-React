import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import App from "./app/App";
import { ThemeProvider } from "app/providers/ThemeProvider";
import "shared/config/i18n/i18n";
import './app/styles/index.scss';
import { StoreProvider } from "app/providers/StoreProvider";
import { BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <StoreProvider>
            <React.StrictMode>
                <ErrorBoundary>
                    <ThemeProvider>
                        <App/>
                    </ThemeProvider>
                </ErrorBoundary>
            </React.StrictMode>
        </StoreProvider>
    </BrowserRouter>
);