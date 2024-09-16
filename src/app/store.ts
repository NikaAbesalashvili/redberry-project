import { configureStore } from "@reduxjs/toolkit";

import agentReducer from './slices/agentSlice';
import listingReducer from './slices/listingSlice';
import locationsSlice from './slices/locationSlice';

export const store = configureStore({
    reducer: {
        agents: agentReducer,
        listings: listingReducer,
        locations: locationsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
