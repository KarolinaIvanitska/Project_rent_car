import { createReducer } from "@reduxjs/toolkit";
import { setCars, addFavorite, removeFavorite, setFilter } from "./actions";

const initialState = {
  cars: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  filter: {
    make: "",
    price: 0,
    mileage: 0,
  },
};

const carReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCars, (state, action) => {
      state.cars = action.payload;
    })
    .addCase(addFavorite, (state, action) => {
      state.favorites.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    })
    .addCase(removeFavorite, (state, action) => {
      state.favorites = state.favorites.filter(
        (car) => car.id !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    })
    .addCase(setFilter, (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    });
});

export default carReducer;
