import axios from "axios";

const api = axios.create({
  baseURL: "https://663e138fe1913c4767966ece.mockapi.io/",
});

// export const fetchCars = () => api.get("/");
// export const fetchCar = (id) => api.get(`/${id}`);

export default api;
