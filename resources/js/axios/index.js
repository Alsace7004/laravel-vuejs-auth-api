import axios from "axios";
import { useAuthStore } from "../store";
axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
const axiosClient = axios.create({
    baseURL:'http://localhost:8000/api/',
    withCredentials: true
})

axiosClient.interceptors.request.use(config=>{
    const token = useAuthStore()
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default axiosClient