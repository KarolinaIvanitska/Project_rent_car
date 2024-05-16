import { createSelector } from "@reduxjs/toolkit";

export const selectedCars = (state) => state.cars;
export const selectFavorites = (state) => state.favorites;
export const selectFilter = (state) => state.filter;

export const selectFilteredCars = createSelector(
  [selectedCars, selectFilter],
  (cars, filter) => {
    if (!Array.isArray(cars)) {
      return [];
    }
    // return cars.filter(
    //   (car) =>
    //     car.make.includes(filter.make) &&
    //     car.price <= filter.price &&
    //     car.mileage <= filter.mileage
    // );

    if (cars !== undefined) {
      return cars.filter((car) =>
        car.make.toLowerCase().includes(filter.trim().toLowerCase())
      );
    }
  }
);
