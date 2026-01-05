import axiosInstance from "./axiosInstance";

export const getCartByUserId =  async (userId) => { 
  try { 
    const response = await axiosInstance.get(`/cart/user/${userId}`);
    return Promise.resolve(response.data)
  }
  catch(error) { 
    return Promise.reject(error);
  }
}

export const createCart = async (userId)=> {
 try { 
  const response = await axiosInstance.post(`/cart/${userId}`);
  return Promise.resolve(response.data)
 }
 catch(error) { 
  return Promise.reject(error);
 }
}

export const addProductToCart = async (productId,cartId)=>  {
try { 
  const response = await axiosInstance.post(`/cart/${cartId}/add-item/${productId}`);
  return Promise.resolve(response.data)
}
catch(error){
  return Promise.reject(error);
}
}

export const updateCart = async (cart) => {
  try { 
    const response = await axiosInstance.post(`/cart/update`,cart);
    return Promise.resolve(response.data)
  }
  catch(error){
    return Promise.reject(error);
  }
}