import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login';
import Header from '../components/layout/Header';
import NotFound from '../pages/PageNotFound';

const lazyLoad = path => lazy(() => /* @vite-ignore */ import(path));

const auth = element => (
    <PrivateRoute>
        <ErrorBoundary>
            <Suspense>
                {element}
            </Suspense>
        </ErrorBoundary>
    </PrivateRoute>
);

const Dashboard = {
    MainPage: lazyLoad(`../pages/Dashboard`),
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
        index: true
    },
    {
        path: '*',
        element: <NotFound />,
    },
    {
        path: '/home',
        element: auth(<Header />),
        children: [
            {
                path: 'dashboard',
                element: auth(<Dashboard.MainPage />),
            },
        ],
    },
]);

export default router;