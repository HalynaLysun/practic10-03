import apiInstance from '../services/api';

export async function pushNewProduct(title, description, price) {
  const response = await apiInstance.post('/products', {
    title: title,
    description: description,
    price: price,
  });
  return response.data;
}
