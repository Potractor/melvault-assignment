import axios from "axios";
const BASE_URL = "http://localhost:8080/api/auth"
const urls = {
  register: "/register",
  login: "/login"
}
export const register = (body)=> {
  try { 
const response = axios.post(BASE_URL+urls.register , body)
 return Promise.resolve(response);
}
catch (error) { 
  return Promise.reject(error);
}
}
export const login = (body)=> {
  try { 
const response = axios.post(BASE_URL+urls.login , body)
 return Promise.resolve(response);
}
catch (error) { 
  return Promise.reject(error);
}
}