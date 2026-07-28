import axios from "axios";

// It automatically prefixes all requests with http://127.0.0.1:8000/api
// Keeps your code DRY (no need to repeat base URL or token logic everywhere)
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

// Request Interceptor
// Centralizes authentication handling.
// Makes it easy to add more interceptors later (e.g., logging, error handling, refresh tokens)
api.interceptors.request.use(
  (config) => {

    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export default api;

// Axios interceptor → “Do you have a token? If yes, I’ll attach it to every request so the backend knows who you are.”
// Axios interceptor ensures that once inside, all their API calls are properly authenticated.