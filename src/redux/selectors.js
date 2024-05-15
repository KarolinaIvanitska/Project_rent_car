import { createSelector } from "@reduxjs/toolkit";
import { selectCars } from "./cars/carSlice";
import { selectFilter } from "./filter/filterSlice";

export const selectFilteredCars = createSelector(
  [selectCars, selectFilter],
  (cars, searchStr) => {
    if (!cars) {
      return []; // Повертаємо порожній масив, якщо cars є undefined
    }
    const search = searchStr.trim().toLowerCase();
    return cars.filter(
      (car) => car.make && car.make.toLowerCase().includes(search) // Перевірка на наявність name у car
    );
  }
);
