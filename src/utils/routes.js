import ComparingPage from "../pages/ComparingPage";
import DormitoryPage from "../pages/DormitoryPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import { HOME_PAGE_ROUTE, DORMITORY_PAGE_ROUTE, LOGIN_PAGE_ROUTE, COMPARING_PAGE_ROUTE } from "./consts";

export const routes = [
    {
        path: HOME_PAGE_ROUTE,
        element: HomePage
    }, 
    {
        path: DORMITORY_PAGE_ROUTE,
        element: DormitoryPage
    },
    {
        path: LOGIN_PAGE_ROUTE,
        element: LoginPage
    },
    {
        path: COMPARING_PAGE_ROUTE,
        element: ComparingPage
    }
];