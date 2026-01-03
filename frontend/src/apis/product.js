import axiosInstance from "./axiosInstance";


export const getAllProducts =async ()=>{
  try { 
    const response = await axiosInstance.get("product/all")
   return Promise.resolve(response.data);
  }
  catch(error){
    return Promise.reject(error)
  }
}

export const getProductsByCategory  = async (category) => {
  try {
    const response = await axiosInstance.get(`product?category=${category}`)
    return Promise.resolve(response.data)
  }
  catch(error) { 
    return Promise.resolve(error)
  }
}
export const getProductsById  = async (id) => {
  console.log(id)
  try {
    const response = await axiosInstance.get(`product/${id}`)
    return Promise.resolve(response.data)
  }
  catch(error) { 
    return Promise.resolve(error)
  }
}