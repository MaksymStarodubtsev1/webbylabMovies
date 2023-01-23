import {API_URL} from "../config/env";
import axios from "axios";

const token = JSON.parse(localStorage.getItem('token'))
console.log(API_URL);
export const Client = axios.create({
  baseURL: API_URL,
  timeout: 8000,
  headers: {
    'Authorization': token
  },
});