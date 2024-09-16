import { createSlice } from "@reduxjs/toolkit";
import { fetchListings, fetchListingById, createListing, deleteListing } from '../thunks';

import { ListingsState } from "../../types";

const initialState: ListingsState = {
    listings: [],
    status: 'idle',
    error: null,
    individualListing: null,
    individualListingStatus: 'idle',
    individualListingError: null,
};

const listingSlice = createSlice({
    name: 'listings',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchListings.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchListings.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.listings = action.payload;
            })
            .addCase(fetchListings.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string || 'Failed to fetch real estates';
            })
            .addCase(fetchListingById.pending, (state) => {
                state.individualListingStatus = 'loading';
            })
            .addCase(fetchListingById.fulfilled, (state, action) => {
                state.individualListingStatus = 'succeeded';
                state.individualListing = action.payload;
            })
            .addCase(fetchListingById.rejected, (state, action) => {
                state.individualListingStatus = 'failed';
                state.individualListingError = action.payload as string || 'Failed to fetch real estates';
            })
            .addCase(createListing.fulfilled, (state, action) => {
                state.listings = [ ...state.listings, action.payload ];
            })
            .addCase(deleteListing.fulfilled, (state, action) => {
                state.listings = state.listings.filter((listing) => listing.id !== action.payload);
            });
    },
});

export default listingSlice.reducer;
