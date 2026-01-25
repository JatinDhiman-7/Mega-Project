import axios from "axios";

const API = "https://foodapp-backend-z4ba.onrender.com/foodapp/";

//profile
export const profiledata = async () => {
  try {
    const res = await axios.get(API + "profiles/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error.response?.data);
    return null;
  }
};

// Register
export const registerUser = (data) => axios.post(API + "register/", data);

// Login
export const loginUser = async (data) => {
  const response = await axios.post(API + "login/", data);
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
  const res = await axios.get(API + "cart/", { headers: authHeader() });
  return res.data;
};
