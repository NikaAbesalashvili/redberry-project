import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/config";

export const fetchCities = createAsyncThunk('cities/fetchCities', async (_, thunkAPI) => {
    try {
        const response = await axiosInstance.get('/cities');
        return response.data;  
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    };
});

export const fetchRegions = createAsyncThunk('regions/fetchRegions', async (_, thunkAPI) => {
    try {
        const response = await axiosInstance.post('/regions');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    };
});
