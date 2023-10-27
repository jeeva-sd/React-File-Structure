import { lazyLoad, wrapRoutes } from "./wrapper";
import Header from '../components/layout/Header';

const Dashboard = {
    MainPage: lazyLoad(`../pages/Dashboard`),
};

const dashboardRoutes = wrapRoutes({
    path: 'dashboard',
    element: <Dashboard.MainPage />,
});

const combineRoutes = [
    dashboardRoutes
];

export const appRoutes = {
    path: '/home',
    element: <Header />,
    children: combineRoutes,
};