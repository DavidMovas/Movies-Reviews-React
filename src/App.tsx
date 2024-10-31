import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MainAsync } from './pages/main/Main.async';
import { AboutAsync } from './pages/about/About.async';
import { Counter } from "./components/Counter";
import './styles/index.scss'
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";



const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Theme</button>
            <Router>
                <nav>
                    <Link to={"/"}>Main</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/counter"}>Counter</Link>
                </nav>

                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<MainAsync/>}/>
                        <Route path="/about" element={<AboutAsync/>}/>
                        <Route path="/counter" element={<Counter/>}/>
                    </Routes>
                </Suspense>
            </Router>
        </div>
    );
}

export default App;