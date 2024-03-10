import apiInstance from '../services/api';

export async function getAllProducts() {
  const response = await apiInstance.get('/products');
  return response.data;
}

export async function getProductById(id) {
  const response = await apiInstance.get(`/products/${id}`);
  return response.data;
}
