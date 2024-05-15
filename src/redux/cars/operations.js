// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { api } from "../../config/Api";

// //завантаження даних

// export const fetchCars = createAsyncThunk(
//   "cars/fetchAll",
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await api.get("/cars");
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
