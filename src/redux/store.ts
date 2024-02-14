// Store is like a temporary mini database for our application that lives in our client side.

import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './slices/RootSlice';

export const store = configureStore({
    reducer,
    devTools: true,
})

export default store