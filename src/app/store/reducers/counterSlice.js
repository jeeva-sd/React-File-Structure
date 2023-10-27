import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        valueTwo: 0,
        post: {
            isRequesting: false,
            data: {}
        }
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
            state.valueTwo += 1;
        },
        decrement: (state) => {
            state.value -= 1;
            state.valueTwo -= 1;
        },
        reset: (state) => {
            state.value = 0;
            state.valueTwo = 0;
        },
        setPostRequest: (state) => {
            state.post.data = {};
            state.post.isRequesting = true;

        },
        setPost: (state, action) => {
            state.post.data = action.payload;
            state.post.isRequesting = false;
        },
    },
});

export const counterPersistConfig = {
    key: 'counter',
    storage,
    keyPrefix: '',
    whitelist: ['value'],
};

export const { increment, decrement, reset, setPost, setPostRequest } = counterSlice.actions;
export default persistReducer(counterPersistConfig, counterSlice.reducer);
