import React from 'react';
import { useSelector } from "react-redux";
import { getUserData } from "enteties/User";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

function RequireAuth({children}: Readonly<{ children: JSX.Element }>) {
    const auth = useSelector(getUserData);
    const location = useLocation();

    if (!auth.access_token) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;