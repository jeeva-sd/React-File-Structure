import { createBrowserRouter } from 'react-router-dom';
import ChildRoute from '../components/ChildRoute';
import PageTwo from '../pages/PageTwo';
import PageOne from '../pages/PageOne';

const router = createBrowserRouter([
    {
        path: '/',
        element: <PageOne />,
        index: true
    },
    {
        path: '/page-two',
        element: <PageTwo />,
        children: [
            {
                path: 'child-route',
                element: <ChildRoute />,
                children: [
                    {
                        path: 'page',
                        element: <PageOne />,
                    },
                ]
            },
        ],
    },
]);

export default router;