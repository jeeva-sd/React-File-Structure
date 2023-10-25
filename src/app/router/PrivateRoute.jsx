import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    const isAuthenticated = true;
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) navigate('/');
    }, []);

    return isAuthenticated ? children : <></>;
}

export default PrivateRoute;
