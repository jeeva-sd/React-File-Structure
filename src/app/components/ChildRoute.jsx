import { Outlet } from 'react-router-dom';

const ChildRoute = () => {
    return (
        <div>
            <Outlet />
            ChildRoute
        </div>
    );
};

export default ChildRoute;