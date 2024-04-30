import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

// npm config set legacy-peer-deps true