import apiInstance from '../services/api';

export async function getAllProducts() {
  const response = await apiInstance.get('/products');
  return response.data;
}
