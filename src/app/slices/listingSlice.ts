import { createSlice } from "@reduxjs/toolkit";
import { fetchListings, fetchListingById, createListing, deleteListing } from '../thunks';

import { ListingsState } from "../../types";
import { Status } from "../../constants";

const initialState: ListingsState = {
    listings: [],
    status: Status.Idle,
    error: null,
    individualListing: null,
    individualListingStatus: Status.Idle,
    individualListingError: null,
};

const listingSlice = createSlice({
    name: 'listings',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchListings.pending, (state) => {
                state.status = Status.Loading;
            })
            .addCase(fetchListings.fulfilled, (state, action) => {
                state.status = Status.Succeeded;
                state.listings = action.payload;
            })
            .addCase(fetchListings.rejected, (state, action) => {
                state.status = Status.Failed;
                state.error = action.payload as string || 'Failed to fetch real estates';
            })
            .addCase(fetchListingById.pending, (state) => {
                state.individualListingStatus = Status.Loading;
            })
            .addCase(fetchListingById.fulfilled, (state, action) => {
                state.individualListingStatus = Status.Succeeded;
                state.individualListing = action.payload;
            })
            .addCase(fetchListingById.rejected, (state, action) => {
                state.individualListingStatus = Status.Failed;
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
