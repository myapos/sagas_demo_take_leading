import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  queries: {},
};

export const calls = createSlice({
  name: "calls",
  initialState,
  reducers: {
    handleCall: (state, action) => {
      state.queries = {
        ...state.queries,
        [action.payload.value]: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleCall } = calls.actions;

export const getQueries = (state) => state.calls.queries;
export const callsReducer = calls.reducer;
