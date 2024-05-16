import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../config/Api";

// Визначення асинхронної операції для завантаження машин
export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  try {
    const { data } = await api.get(`cars`);
    return data;
  } catch (error) {
    return api.rejectWithValue(error.message);
  }
});
