import {API_URl} from "../config/env";
import axios from "axios";

const token = JSON.parse(localStorage.getItem('token'))

export const Client = axios.create({
  baseURL: API_URl,
  timeout: 8000,
  headers: {
    'Authorization': token
  },
});