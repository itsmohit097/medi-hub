import axios from "axios";

const api = axios.create({
    baseURL: "https://medi-hub.onrender.com/api/v1",

})

export default api;