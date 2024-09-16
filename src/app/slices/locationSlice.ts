import { createSlice } from "@reduxjs/toolkit";
import { fetchRegions, fetchCities } from '../thunks';

import { LocationsState } from "../../types";

const initialState: LocationsState = {
    regionsStatus: 'idle',
    regions: [],
    regionsError: null,
    citiesStatus: 'idle',
    cities: [],
    citiesError: null,
};

const locationsSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRegions.pending, (state) => {
                state.regionsStatus = 'loading';
            })
            .addCase(fetchRegions.fulfilled, (state, action) => {
                state.regionsStatus = 'succeeded';
                state.regions = action.payload;
            })
            .addCase(fetchRegions.rejected, (state, action) => {
                state.regionsStatus = 'failed';
                state.regionsError = action.payload as string || 'Failed to fetch regions';
            })
            .addCase(fetchCities.pending, (state) => {
                state.citiesStatus = 'loading';
            })
            .addCase(fetchCities.fulfilled, (state, action) => {
                state.citiesStatus = 'succeeded';
                state.cities = action.payload;
            })
            .addCase(fetchCities.rejected, (state, action) => {
                state.citiesStatus = 'failed';
                state.citiesError = action.payload as string || 'Failed to load cities';
            });
    },
});

export default locationsSlice.reducer;
