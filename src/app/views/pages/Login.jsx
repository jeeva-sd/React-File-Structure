import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState('123');

    const handleLogin = () => {
        navigate('/home/dashboard');
    };

    return (
        <div className='min-h-screen w-screen flex items-center justify-center bg-gray-100'>
            <div className='bg-white p-8 rounded shadow-md w-96'>
                <h2 className='text-2xl font-semibold text-center mb-4'>Login</h2>
                <form>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
                            Username
                        </label>
                        <input
                            className='w-full px-3 py-2 border rounded border-gray-300  outline-sky-300'
                            type='text'
                            id='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                            Password
                        </label>
                        <input
                            className='w-full px-3 py-2 border rounded border-gray-300 outline-sky-300'
                            type='password'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        className='w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600'
                        type='button'
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default App;
