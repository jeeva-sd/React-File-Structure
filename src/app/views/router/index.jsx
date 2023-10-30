import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import NotFound from '../pages/PageNotFound';
import { appRoutes } from './routes';

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
    appRoutes
]);

export default router;