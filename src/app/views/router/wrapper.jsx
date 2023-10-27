import { Suspense, lazy } from "react";
import PrivateRoute from "./PrivateRoute";
import ErrorBoundary from "./ErrorBoundary";

export const lazyLoad = path => lazy(() => import(/* @vite-ignore */ path));

export const wrapRoute = element => (
    <PrivateRoute>
        <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
                {element}
            </Suspense>
        </ErrorBoundary>
    </PrivateRoute>
);

export const wrapRoutes = routeConfig => {
    const wrappedRoute = { ...routeConfig };
    wrappedRoute.element = wrapRoute(routeConfig.element);

    if (routeConfig.children) {
        wrappedRoute.children = routeConfig.children.map((child) => wrapRoutes(child));
    }

    return wrappedRoute;
};