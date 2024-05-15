import axios from "axios";

const api = axios.create({
  baseURL: "https://<your-mockapi-io-url>/adverts",
});

export const fetchCars = () => api.get("/");
export const fetchCar = (id) => api.get(`/${id}`);

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = () => {
  api.defaults.headers.common.Authorization = ``;
};
