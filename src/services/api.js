import axios from "axios";

const api = axios.create({
  baseURL: "https://realestate-portal-backend.onrender.com/"
});

export default api;
