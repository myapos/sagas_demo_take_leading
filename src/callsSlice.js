import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  queries: {},
  data: [],
  fetching: false,
};

export const calls = createSlice({
  name: "calls",
  initialState,
  reducers: {
    handleCall: (state, action) => {
      const { fetching, ...restPayload } = action.payload;
      state.queries = {
        ...state.queries,
        [action.payload.value]: restPayload,
      };
    },
    saveData: (state, action) => {
      state.data = action.payload;
      state.fetching = false;
    },
    handleFetching: (state, action) => {
      state.fetching = action.payload.fetching;
    },
  },
});

//! Action creators are generated for each case reducer function
export const { handleCall, saveData, handleFetching } = calls.actions;

//! selectors
export const getQueries = (state) => state.calls.queries;
export const getData = (state) => state.calls.data;
export const getFetching = (state) => state.calls.fetching;

export const callsReducer = calls.reducer;
