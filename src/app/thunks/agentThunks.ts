import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import axiosInstance from "../../api/config";


export const fetchAgents = createAsyncThunk('agents/fetchAgents', async (_, thunkAPI) => {
    try {
        const response = await axiosInstance.get('/agents');
        return response.data;  
    } catch (error) {
        const axiosError = error as AxiosError;

        if (axiosError.response) return thunkAPI.rejectWithValue(axiosError.response.data);
    };
});

export const createAgent = createAsyncThunk('agents/createAgent', async (agentData, thunkAPI) => {
    try {
        const response = await axiosInstance.post('/agents', agentData);
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;

        if (axiosError.response) return thunkAPI.rejectWithValue(axiosError.response.data);
    };
});
