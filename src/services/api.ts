import axios from "axios";

const api = axios.create({
  baseURL: "https://notectts-8uoi.onrender.com",
  timeout: 8000
});

export default api;