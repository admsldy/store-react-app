import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice.ts';

export interface RootState {
    auth: ReturnType<typeof authReducer>;
}

export const store = configureStore({
    reducer: {
        auth: authReducer
    },
});