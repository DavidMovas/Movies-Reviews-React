import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import { MainPage } from "pages/main";
import { AboutPage } from "pages/about";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
