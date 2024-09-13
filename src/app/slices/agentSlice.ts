import { createSlice } from "@reduxjs/toolkit";
import { fetchAgents, createAgent } from "../thunks";

const agentSlice = createSlice({
    name: 'agents',
    initialState: {
        agents: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAgents.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchAgents.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.agents = action.payload;
        })
        .addCase(fetchAgents.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        })
        .addCase(createAgent.fulfilled, (state, action) => {
          state.agents.push(action.payload);
        });
    },
});

export default agentSlice.reducer
