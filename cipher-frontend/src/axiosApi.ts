import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'http://localhost:5137/ciphers',
});

export default axiosApi;
