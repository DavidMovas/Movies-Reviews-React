import React from "react";
import { RouteProps } from "react-router-dom";
import { MainPage } from "pages/main";
import { AboutPage } from "pages/about";
import { NotFoundPage } from "pages/not_found_page";
import { ProfilePage } from "pages/profile_page";
import { MoviesPage } from "pages/movies_page";
import { MovieDetailsPage } from "pages/movie_page";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE_PAGE = 'profile_page',
    MOVIES_PAGE = 'movies_page',
    MOVIE_DETAILS_PAGE = 'movie_details_page',

    //last
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE_PAGE]: '/profile',
    [AppRoutes.MOVIES_PAGE]: '/movies',
    [AppRoutes.MOVIE_DETAILS_PAGE]: '/movies/', // + id
    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
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
        element: <ProfilePage/>,
        authOnly: true
    },
    [AppRoutes.MOVIES_PAGE]: {
        path: RoutePath.movies_page,
        element: <MoviesPage/>,
    },
    [AppRoutes.MOVIE_DETAILS_PAGE]: {
        path: `${RoutePath.movie_details_page}:id`,
        element: <MovieDetailsPage/>,
    },

    //last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    }
}