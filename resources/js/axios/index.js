import axios from "axios";
import { useAuthStore } from "../store";
const axiosClient = axios.create({
    baseURL:'http://localhost:8000/api/'
})

axiosClient.interceptors.request.use(config=>{
    const token = useAuthStore()
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default axiosClient