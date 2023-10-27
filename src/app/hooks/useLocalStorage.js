import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
    // Retrieve data from localStorage when the component initializes
    const storedValue = localStorage.getItem(key);
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;

    // State to hold the current value
    const [value, setValue] = useState(initial);

    // Update localStorage when the state changes
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;
