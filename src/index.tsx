import ReactDOM from 'react-dom/client';
import React from 'react';
import App from "./app/App";
import { ThemeProvider } from "app/providers/ThemeProvider";

import "shared/config/i18n/i18n";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
);