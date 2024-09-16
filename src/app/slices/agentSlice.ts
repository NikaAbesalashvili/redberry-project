import { createSlice } from "@reduxjs/toolkit";
import { fetchAgents, createAgent } from "../thunks";

import { AgentsState } from "../../types";
import { Status } from "../../constants";

const initialState: AgentsState = {
	agents: [],
	status: Status.Idle,
	error: null,
}

const agentSlice = createSlice({
    name: 'agents',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      	builder
			.addCase(fetchAgents.pending, (state) => {
				state.status = Status.Loading;
			})
			.addCase(fetchAgents.fulfilled, (state, action) => {
				state.status = Status.Succeeded;
				state.agents = action.payload;
			})
			.addCase(fetchAgents.rejected, (state, action) => {
				state.status = Status.Failed;
				state.error = action.payload as string || 'Failed to fetch agents';
			})
			.addCase(createAgent.fulfilled, (state, action) => {
				state.agents = action.payload;
			});
    },
});

export default agentSlice.reducer
