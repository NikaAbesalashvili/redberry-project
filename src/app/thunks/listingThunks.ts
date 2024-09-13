import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/config";
import axios from "axios";

export const fetchListings = createAsyncThunk('realEstates/fetchListings', async (_, thunkAPI) => {
    try {
        const response = await axiosInstance.get('/real-estates');
        return response.data;  
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    };
});

export const fetchListingById = createAsyncThunk('realEstates/fetchRealEstateById', async (listingId, thunkAPI) => {
    try {
        const response = await axiosInstance.get(`/real-estates/${listingId}`);
        return response.data;  
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    };
});

export const createListing = createAsyncThunk('realEstates/createListing', async (listingData, thunkAPI) => {
    try {
        const response = await axiosInstance.post('/real-estates', listingData);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    };
});

export const deleteListing = createAsyncThunk('realEstates/deleteRealEstate', async (listingId, thunkAPI) => {
    try {
        await axiosInstance.delete(`/real-estates/${listingId}`);
        return listingId;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    };
});
