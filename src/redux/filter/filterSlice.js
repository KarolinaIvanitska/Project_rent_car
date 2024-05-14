import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  filter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  selectors: {
    selectFilter: (state) => state.filter,
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});
export const { changeFilter } = filterSlice.actions;
export const { selectFilter } = filterSlice.selectors;
export const filterReducer = filterSlice.reducer;
