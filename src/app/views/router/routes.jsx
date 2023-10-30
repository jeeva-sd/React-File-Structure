import { lazyLoad, wrapRoutes } from './wrapper';
import Header from '../components/layout/Header';

const Dashboard = {
    MainPage: lazyLoad('../pages/Dashboard'),
};

const dashboardRoutes = {
    path: 'dashboard',
    element: <Dashboard.MainPage />,
    private: true,
};

const combineRoutes = [
    dashboardRoutes
];

export const appRoutes = wrapRoutes({
    path: '/home',
    element: <Header />,
    private: false,
    children: combineRoutes,
});