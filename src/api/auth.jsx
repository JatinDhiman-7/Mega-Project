import axios from "axios";

const API = "https://web-production-02919.up.railway.app/foodapp/";

// Register
export const registerUser = (data) => axios.post(API + "register/", data);

// Login
export const loginUser = async (data) => {
  const response = await axios.post(API + "login/", data);
  // Save JWT tokens
  console.log(data)
  localStorage.setItem("access", response.data.access);
  localStorage.setItem("refresh", response.data.refresh);
  return response.data;
};

// Logout
export const logoutUser = async () => {
  const refresh = localStorage.getItem("refresh");
  if (refresh) {
    await axios.post(API + "logout/", { refresh });
  }
  localStorage.clear();
};

// Auth header
export const authHeader = () => {
  const access = localStorage.getItem("access");
  return { Authorization: `Bearer ${access}` };
};

// Cart details
export const getCart = async () => {
  const res = await axios.get(API + "cart/", { headers: authHeader() });
  return res.data;
};
