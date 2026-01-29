import axios from "axios";
import api from "./api";
const API="https://foodapp-backend-z4ba.onrender.com/foodapp/"
//profile
export const profiledata = async () => {
  try {
    const res = await api.get("profiles/");
    return res.data;
  } catch (error) {
    console.error(error.response?.data);
    return null;
  }
};

// Register
export const registerUser = (data) => api.post("register/", data);

// Login
export const loginUser = async (data) => {
  const response = await api.post("login/", data);
  console.log(response)
  localStorage.setItem("access", response.data.access);
  localStorage.setItem("refresh", response.data.refresh);
  return response.data;
};

// Logout
export const logoutUser = async () => {
  try {
    await axios.post(API + 'logout/',
      { refresh: localStorage.getItem("refresh") },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      }
    )
  } catch (err) {
    console.error("Logout failed:", err.response?.data || err.message);
  }
};

// Auth header
export const authHeader = () => {
  const access = localStorage.getItem("access");
  return { Authorization: `Bearer ${access}` };
};


// Cart details
export const getCart = async () => {
  const res = await api.get(+ "cart/", { headers: authHeader() });
  return res.data;
};
