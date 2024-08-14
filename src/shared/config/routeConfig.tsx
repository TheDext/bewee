import { MainPage } from 'pages/main'
import { RouteProps } from 'react-router-dom'

export enum AppRoutes {
    MAIN = 'main',
    // ABOUT = "about",
    // DELIVERY = "delivery",
    // REVIEWS = "reviews",
    // FAQ = "faq",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    // [AppRoutes.ABOUT]: "about",
    // [AppRoutes.DELIVERY]: "delivery",
    // [AppRoutes.REVIEWS]: "reviews",
    // [AppRoutes.FAQ]: "faq"
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
}
