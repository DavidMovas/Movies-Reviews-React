import React from "react";
import { RouteProps } from "react-router-dom";
import { MainPage } from "pages/main";
import { AboutPage } from "pages/about";
import { NotFoundPage } from "pages/not_found_page";
import { ProfilePage } from "pages/profile_page";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE_PAGE = 'profile_page',

    //last
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
    [AppRoutes.PROFILE_PAGE]: '/profile'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [AppRoutes.PROFILE_PAGE]: {
        path: RoutePath.profile_page,
        element: <ProfilePage/>
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    }
}