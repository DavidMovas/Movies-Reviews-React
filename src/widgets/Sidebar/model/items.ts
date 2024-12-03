import React, { SVGProps } from "react";
import MainPageIcon from "shared/assets/icons/home-svgrepo-com.svg";
import AboutPageIcon from "shared/assets/icons/about-us-svgrepo-com.svg";
import ProfilePageIcon from "shared/assets/icons/profile-svgrepo-com.svg";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.FC<SVGProps<SVGSVGElement>>;
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Main',
        Icon: MainPageIcon,
    },
    {
        path: RoutePath.profile_page,
        text: 'Profile',
        Icon: ProfilePageIcon,
    },
    {
        path: RoutePath.about,
        text: 'About',
        Icon: AboutPageIcon,
    },
];