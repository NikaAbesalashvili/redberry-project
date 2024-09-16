import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/config";
import { AxiosError } from "axios";

export const fetchCities = createAsyncThunk('cities/fetchCities', async (_, thunkAPI) => {
    try {
        const response = await axiosInstance.get('/cities');
        return response.data;  
    } catch (error) {
        const axiosError = error as AxiosError;

        if (axiosError.response) return thunkAPI.rejectWithValue(axiosError.response.data);
    };
});

export const fetchRegions = createAsyncThunk('regions/fetchRegions', async (_, thunkAPI) => {
    try {
        const response = await axiosInstance.post('/regions');
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;

        if (axiosError.response) return thunkAPI.rejectWithValue(axiosError.response.data);
    };
});
