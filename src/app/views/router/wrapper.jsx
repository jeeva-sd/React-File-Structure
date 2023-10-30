import { Fragment, Suspense, lazy } from 'react';
import PrivateRoute from './PrivateRoute';
import ErrorBoundary from './ErrorBoundary';

export const lazyLoad = path => lazy(() => import(/* @vite-ignore */ path));

export const wrapRoute = routeConfig => {
    const AuthRoute = routeConfig.private ? PrivateRoute : Fragment;
    const Layout = routeConfig.layout ? routeConfig.layout : Fragment;

    return (
        <AuthRoute>
            <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                    <Layout>
                        {routeConfig.element}
                    </Layout>
                </Suspense>
            </ErrorBoundary>
        </AuthRoute>
    );
};

export const wrapRoutes = routeConfig => {
    const wrappedRoute = { ...routeConfig };
    wrappedRoute.element = wrapRoute(routeConfig);

    if (routeConfig.children) {
        wrappedRoute.children = routeConfig.children.map((child) => wrapRoutes(child));
    }

    return wrappedRoute;
};