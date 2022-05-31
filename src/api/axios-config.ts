// import { axiosClient } from "./mock/mock";
import axios, { AxiosRequestConfig } from "axios";

const axiosClient = axios.create();

// Interceptor send
axiosClient.interceptors.request.use((request) => {
  //   const token = getLocalStorageCognitoIdToken();
  //   token && (request.headers["Authorization"] = `Bearer ${token}`);
  return request;
});

// Interceptor response
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw error;
  }
);

axiosClient.defaults = {
  baseURL: `${process.env.REACT_APP_BACKEND_ENDPOINT}`,
  headers: {
    common: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    delete: {},
    get: {},
    head: {},
    post: {},
    put: {},
    patch: {},
  },
  timeout: Number(process.env.REACT_APP_API_TIMEOUT) || 60000,
};

export function getRequest(URL, config?: AxiosRequestConfig) {
  return axiosClient.get(URL, config).then((response) => response);
}

export function postRequest(URL, payload, config?: AxiosRequestConfig) {
  return axiosClient.post(URL, payload, config).then((response) => response);
}

export function putRequest(URL, payload?, config?: AxiosRequestConfig) {
  return axiosClient.put(URL, payload, config).then((response) => response);
}

export function deleteRequest(URL, config?: AxiosRequestConfig) {
  return axiosClient.delete(URL, config).then((response) => response);
}
