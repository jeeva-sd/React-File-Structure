import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, setPostRequest } from '../../store/reducers/counterSlice';

const Dashboard = () => {
    const { value, valueTwo, post: { data } } = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    const handleApiCall = () => {
        dispatch(setPostRequest());
    };

    return (
        <div className='flex flex-wrap w-full h-[90vh] justify-center'>
            <div className='flex flex-wrap justify-center w-full gap-2 items-center'>
                <div className='w-full'>
                    <p className='text-center'>State Count (persist): {value}</p>
                    <p className='text-center'>State Count (normal): {valueTwo}</p>
                </div>

                <button onClick={handleIncrement} className='bg-blue-500 hover:bg-blue-600 text-white font-semibold border rounded-lg px-4 py-2 mx-2'>Increment</button>
                <button onClick={handleDecrement} className='bg-red-500 hover:bg-red-600 text-white font-semibold border rounded-lg px-4 py-2 mx-2'>Decrement</button>
                <button onClick={() => handleApiCall()} className='bg-green-500 hover:bg-green-600 text-white font-semibold border rounded-lg px-4 py-2 mx-2'>Call</button>
            </div>

            <div className='flex'>
                Title: {data?.title}
            </div>
        </div>
    );
};

export default Dashboard;