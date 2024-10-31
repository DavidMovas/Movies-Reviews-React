import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MainPage } from 'pages/main/index';
import { AboutPage } from 'pages/about/index';
import './styles/index.scss'
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Theme</button>
            <Router>
                <nav>
                    <Link to={"/"}>Main</Link>
                    <Link to={"/about"}>About</Link>
                </nav>

                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                    </Routes>
                </Suspense>
            </Router>
        </div>
    );
}

export default App;