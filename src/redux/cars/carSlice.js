import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const initialState = {
  cars: [],
  page: 1,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  selectors: {
    selectCars: (state) => state.cars,
    // selectPage: (state) => state.page,
    selectIsLoading: (state) => state.isLoading,
    selectIsError: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.cars = payload;
        state.isLoading = false;
      })
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { isLoading, isError } = carSlice.actions;
export const { selectCars, selectIsLoading, selectIsError } =
  carSlice.selectors;

export const carReducer = carSlice.reducer;
