import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/Router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useTheme } from "app/providers/ThemeProvider";
import { useDispatch } from "react-redux";
import { userActions } from "enteties/User";
import { AppDispatch } from "app/providers/StoreProvider/config/store";


const App = () => {
    const {theme} = useTheme();
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

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