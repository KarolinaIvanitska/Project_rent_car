import { createAction } from "@reduxjs/toolkit";

export const setCars = createAction("SET_CARS");
export const addFavorite = createAction("ADD_FAVORITE");
export const removeFavorite = createAction("REMOVE_FAVORITE");
export const setFilter = createAction("SET_FILTER");
