import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const isLinkActive = (pathname) => {
        return location.pathname === pathname ? 'font-bold' : '';
    };

    return (
        <>
            <header className='bg-blue-500 text-white py-4 w-screen'>
                <div className='container mx-auto flex justify-between items-center'>
                    <h1 className='text-2xl font-semibold'>Boiler plate</h1>
                    <nav>
                        <ul className='flex space-x-4 items-center'>
                            <li>
                                <Link to='/home/dashboard' className={`hover:text-blue-300 ${isLinkActive('/home/dashboard')}`}>Dashboard</Link>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        navigate('/');
                                    }}
                                    className='text-base px-4 py-2 bg-white text-black rounded-lg hover:bg-blue-100'
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet />
        </>
    );
}

export default Header;
