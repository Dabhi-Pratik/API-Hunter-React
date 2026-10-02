import axios from "axios";

const BASE_URI = import.meta.env.VITE_BASE_URI;

// GET ALL PRODUCTS
export async function getProducts() {
  try {
    const res = await axios.get(`${BASE_URI}/all`);

    return res.data.products;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}

// ADD PRODUCT
export async function addProduct(productData) {
  try {
    const res = await axios.post(`${BASE_URI}/add`, productData);

    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}

// DELETE PRODUCT
export async function deleteProduct(id) {
  try {
    const res = await axios.delete(`${BASE_URI}/${id}`);

    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}

// EDIT PRODUCT
export async function editProduct(id, productData) {
  try {
    const res = await axios.put(`${BASE_URI}/${id}`, productData);

    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}
