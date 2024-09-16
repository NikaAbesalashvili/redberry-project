import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import axiosInstance from "../../api/config";

export const fetchListings = createAsyncThunk('realEstates/fetchListings', async (_, thunkAPI) => {
    try {
        const response = await axiosInstance.get('/real-estates');
        return response.data;  
    } catch (error) {
        const axiosError = error as AxiosError;

        if (axiosError.response) return thunkAPI.rejectWithValue(axiosError.response.data);
    };
});

export const fetchListingById = createAsyncThunk('realEstates/fetchRealEstateById', async (listingId, thunkAPI) => {
    try {
        const response = await axiosInstance.get(`/real-estates/${listingId}`);
        return response.data;  
    } catch (error) {
        const axiosError = error as AxiosError;

        if (axiosError.response) return thunkAPI.rejectWithValue(axiosError.response.data);
    };
});

export const createListing = createAsyncThunk('realEstates/createListing', async (listingData, thunkAPI) => {
    try {
        const response = await axiosInstance.post('/real-estates', listingData);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;

        if (axiosError.response) return thunkAPI.rejectWithValue(axiosError.response.data);
    };
});

export const deleteListing = createAsyncThunk<number, number, {rejectValue: string}>('realEstates/deleteRealEstate', async (id, thunkAPI) => {
    try {
        await axiosInstance.delete(`/real-estates/${id}`);
        return id;
    } catch (error) {
        const axiosError = error as AxiosError;

        if (axiosError.response) {
            const errorMessage = (axiosError.response.data as { message: string }).message || 'Failed to delete listing';
            return thunkAPI.rejectWithValue(errorMessage);
        }

        return thunkAPI.rejectWithValue('An unexpected error occurred while deleting the listing');
    };
});
