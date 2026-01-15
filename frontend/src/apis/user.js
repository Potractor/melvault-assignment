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
export const getUserFavourites =  async (id) => { 
  try { 
    const response = await axiosInstance.get(`/user/${id}/favourites`);
    return Promise.resolve(response.data)
  }
  catch(error) { 
    return Promise.reject(error);
  }
}
export const getUserFavouritesInfo =  async (id) => { 
  try { 
    const response = await axiosInstance.get(`/user/${id}/favourites-info`);
    return Promise.resolve(response.data)
  }
  catch(error) { 
    return Promise.reject(error);
  }
}

export const addProductToFavourites = async (id,productId) => {
try { 
  const response = await axiosInstance.post(`/user/${id}/add-favourites/${productId}/product`);
  return Promise.resolve(response.data)
}
catch(error) { 
  return Promise.reject(error);
}
}