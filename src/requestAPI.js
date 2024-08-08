import axios from 'axios';

const requestAPI = axios.create({
    baseURL:'http://localhost:3000',
    withCredentials : false
});
requestAPI.interceptors.request.use((request) => {return request;})
requestAPI.interceptors.request.use((response) => {return response;},(error) => {throw error;})

export default requestAPI;