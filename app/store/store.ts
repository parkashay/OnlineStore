import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../slices/cartSlice'

function makeStore() {
    return configureStore({
        reducer: {
            cart: cartReducer
        },
    })
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;