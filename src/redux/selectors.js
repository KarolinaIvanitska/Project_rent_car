import { createSelector } from "@reduxjs/toolkit";
import { selectCars } from "./cars/carSlice";
import { selectFilter } from "./filter/filterSlice";

export const selectFilteredCars = createSelector(
  [selectCars, selectFilter],
  (cars, searchStr) => {
    if (cars !== undefined) {
      return cars.filter((car) =>
        car.name.toLowerCase().includes(searchStr.trim().toLowerCase())
      );
    }
  }
);
