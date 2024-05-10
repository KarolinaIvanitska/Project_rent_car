// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { api } from "../../config/Api";

// export const fetchCars = createAsyncThunk(
//   "/cars/fetchAll",
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await api.get("cars");
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const searchCategoriesThunk = createAsyncThunk(
//   "/categories",
//   async (_, thunkApi) => {
//     try {
//       const { data } = await api.get("/api/categories");
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
