import axios from "axios";

// 1️⃣ Create Axios instance
const api = axios.create({
  baseURL: "https://foodapp-backend-z4ba.onrender.com/",
});

// 2️⃣ Response interceptor
api.interceptors.response.use(
  response => response, // If success, just return response
  async error => {
    // Check if error is 401
    if (error.response && error.response.status === 401) {
      console.log("Access token expired or invalid");

      // Optional: try refresh token here
      const refresh = localStorage.getItem("refresh");
      if (refresh) {
        try {
          const res = await axios.post("/api/token/refresh/", { refresh });
          localStorage.setItem("access", res.data.access);

          // Retry original request with new token
          error.config.headers["Authorization"] = `Bearer ${res.data.access}`;
          return axios(error.config);
        } catch (refreshError) {
          console.log("Refresh token failed, redirect to login");
          // Redirect to login or clear localStorage
          localStorage.removeItem("access");
          localStorage.removeItem("refresh");
          window.location.href = "/login";
          return Promise.reject(refreshError);
        }
      } else {
        console.log("No refresh token, redirect to login");
        window.location.href = "/login";
      }
    }

    return Promise.reject(error); // Other errors
  }
);

export default api;
