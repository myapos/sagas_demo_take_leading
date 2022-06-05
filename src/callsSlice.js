import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  queries: {},
  data: [],
  fetching: false,
  previousQuery: "",
};

export const calls = createSlice({
  name: "calls",
  initialState,
  reducers: {
    qyeryStart: (state, action) => {
      const { payload } = action;

      state.queries = {
        ...state.queries,
        [action.payload.value]: payload,
      };
    },
    updateQuery: (state, action) => {
      const { payload } = action;

      state.queries = {
        ...state.queries,
        [action.payload.value]: payload,
      };
    },
    saveData: (state, action) => {
      state.data = action.payload;
      state.fetching = false;
    },
    handleFetching: (state, action) => {
      state.fetching = action.payload.fetching;
    },
    resetQuery: (state, action) => {
      state.queries = {
        ...state.queries,
        [action.payload.value]: {
          ...action.payload,
        },
      };
    },
    setPreviousQuery: (state, action) => {
      state.previousQuery = action.payload.previousQuery;
    },
  },
});

//! Action creators are generated for each case reducer function
export const {
  qyeryStart,
  saveData,
  handleFetching,
  resetQuery,
  setPreviousQuery,
  updateQuery,
} = calls.actions;

//! selectors
export const getQueries = (state) => state.calls.queries;
export const getData = (state) => state.calls.data;
export const getFetching = (state) => state.calls.fetching;
export const getPreviousQuery = (state) => state.calls.previousQuery;

export const callsReducer = calls.reducer;
