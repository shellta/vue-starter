import axios from "axios";

// axios.defaults.baseURL = "https://example.com/api";
axios.defaults.timeout = 30000;
axios.defaults.headers.common = {
  "X-Requested-With": "XMLHttpRequest",
};

axios.interceptors.request.use((config) => {
  return config;
}, (e) => {
  return Promise.reject(e);
});

axios.interceptors.response.use((response) => {
  return response;
}, (e) => {
  return Promise.reject(e);
});

const http = axios;

export default http;
