import axios from "axios";

const API = "http://127.0.0.1:8000/foodapp/";

export const registerUser = (data) =>
    axios.post(API + "register/", data);

export const loginUser = async (data) => {
    const response = await axios.post(API + "login/", data);
    const token = response.data.token;

    localStorage.setItem("token", token);

    return response;
};

export const logoutUser = () => {
    const token = localStorage.getItem("token");

    return axios.post(
        API + "logout/",
        {},
        {
            headers: {
                Authorization: `Token ${token}`,
            },
        }
    ).then(() => {
        localStorage.removeItem("token");
    });
};

export const authHeader = () => {
    const token = localStorage.getItem("token");
    return {
        headers: { Authorization: `Token ${token}` }
    };
};
