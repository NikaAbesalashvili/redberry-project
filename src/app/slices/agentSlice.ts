import { createSlice } from "@reduxjs/toolkit";
import { fetchAgents, createAgent } from "../thunks";

import { AgentsState } from "../../types";

const initialState: AgentsState = {
	agents: [],
	status: 'idle',
	error: null,
}

const agentSlice = createSlice({
    name: 'agents',
    initialState,
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
				state.error = action.payload as string || 'Failed to fetch agents';
			})
			.addCase(createAgent.fulfilled, (state, action) => {
				state.agents = action.payload;
			});
    },
});

export default agentSlice.reducer
