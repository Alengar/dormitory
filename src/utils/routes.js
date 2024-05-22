import ComparingPage from "../pages/ComparingPage";
import DormitoryPage from "../pages/DormitoryPage";
import DormitoryDetailsPage from "../pages/DetailsPage/DormitoryDetailsPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/LoginPage/register";
import AccountPage from "../pages/AccountPage";
import {
  HOME_PAGE_ROUTE,
  DORMITORY_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  COMPARING_PAGE_ROUTE,
  DORMITORY_DETAILS_PAGE_ROUTE,
  REGISTER_PAGE_ROUTE,
  ACCOUNT_PAGE_ROUTE
} from "./consts";

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
    path: REGISTER_PAGE_ROUTE,
    element: RegisterPage
  },
  {
    path: COMPARING_PAGE_ROUTE,
    element: ComparingPage
  },
  {
    path: DORMITORY_DETAILS_PAGE_ROUTE,
    element: DormitoryDetailsPage
  },
  {
    path: ACCOUNT_PAGE_ROUTE,
    element: AccountPage
  }
];
