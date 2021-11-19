import axios from "axios";
export const API = "http://localhost:8000/products";

export const $api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
});
