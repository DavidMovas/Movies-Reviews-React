import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";
import { getUserData } from "enteties/User";
import { useSelector } from "react-redux";

const AppRouter = () => {
    const isAuth = useSelector(getUserData);

    const routers = useMemo(() => {
        return Object.values(routeConfig).filter(route => {
            return !(route.authOnly && !isAuth.access_token);

        })
    }, [isAuth]);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routers.map(({element, path}) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
