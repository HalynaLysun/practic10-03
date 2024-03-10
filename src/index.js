import './styles/normalize.css';
import './styles/index.css';
import { getAllProducts, getProductById } from './requests/products';
import {
  createAllProdacts,
  createProdactMarkup,
} from './services/markupService';

// getAllProducts().then(console.log)

// console.log(getAllProducts());
const list = document.querySelector('#allProducts');
const productForm = document.querySelector('#singleProductForm');
const containerProduct = document.querySelector('#singleProduct');
// console.log(list);
// console.log(productForm);

productForm.addEventListener('submit', handlerFormSubmit);

async function handlerFormSubmit(event) {
  event.preventDefault();
  const id = event.currentTarget.elements.id.value;
  console.log(id);
  const data = await getProductById(id);
  containerProduct.innerHTML = createProdactMarkup(data);

  console.log(data);
}

async function renderAllProdacts() {
  const data = await getAllProducts();
  console.log(data.products);
  const markup = createAllProdacts(data.products);
  list.innerHTML = markup;
}
// renderAllProdacts();
