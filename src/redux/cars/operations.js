import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Визначення асинхронної операції для завантаження машин
export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  const response = await axios.get("/api/cars");
  return response.data;
});
