import { BrowserRouter as Router } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/Router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useTheme } from "app/providers/ThemeProvider";
import React, { Suspense } from "react";
import './styles/index.scss'


const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback='Loading...'>
                <Router >
                    <Navbar />
                    <div className="content-page">
                        <Sidebar />
                        <AppRouter />
                    </div>
                </Router>
            </Suspense>
        </div>
    );
}

export default App;