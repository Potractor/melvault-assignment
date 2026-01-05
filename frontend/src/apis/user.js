import axiosInstance from "./axiosInstance";

export const getUserInfoDetails =  async (id) => { 
  try { 
    const response = await axiosInstance.get(`/user/${id}`);
    return Promise.resolve(response.data)
  }
  catch(error) { 
    return Promise.reject(error);
  }
}