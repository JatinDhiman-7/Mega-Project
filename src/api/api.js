import axios from "axios";

// 1️⃣ Create Axios instance
const api = axios.create({
  baseURL: "https://foodapp-backend-z4ba.onrender.com/foodapp/",
});

// 2️⃣ Request interceptor to attach access token
api.interceptors.request.use(
  (config) => {
    const access = localStorage.getItem("access");
    if (access) {
      config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 3️⃣ Response interceptor for token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refresh");
      if (refreshToken) {
        try {
          const res = await api.post("/token/refresh/", { refresh: refreshToken });

          // Save new access token
          const newAccessToken = res.data.access;
          localStorage.setItem("access", newAccessToken);

          // Update Authorization header and retry original request
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return api(originalRequest);
        } catch (refreshError) {
          console.error("Refresh token failed, redirecting to login", refreshError);
        }
      }
      // Clear tokens and redirect to login if refresh fails or missing
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;
