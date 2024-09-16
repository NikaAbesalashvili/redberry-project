import { createSlice } from "@reduxjs/toolkit";
import { fetchRegions, fetchCities } from '../thunks';

import { LocationsState } from "../../types";
import { Status } from "../../constants";

const initialState: LocationsState = {
    regionsStatus: Status.Idle,
    regions: [],
    regionsError: null,
    citiesStatus: Status.Idle,
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
                state.regionsStatus = Status.Loading;
            })
            .addCase(fetchRegions.fulfilled, (state, action) => {
                state.regionsStatus = Status.Succeeded;
                state.regions = action.payload;
            })
            .addCase(fetchRegions.rejected, (state, action) => {
                state.regionsStatus = Status.Failed;
                state.regionsError = action.payload as string || 'Failed to fetch regions';
            })
            .addCase(fetchCities.pending, (state) => {
                state.citiesStatus = Status.Loading;
            })
            .addCase(fetchCities.fulfilled, (state, action) => {
                state.citiesStatus = Status.Succeeded;
                state.cities = action.payload;
            })
            .addCase(fetchCities.rejected, (state, action) => {
                state.citiesStatus = Status.Failed;
                state.citiesError = action.payload as string || 'Failed to load cities';
            });
    },
});

export default locationsSlice.reducer;
