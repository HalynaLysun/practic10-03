import './styles/normalize.css';
import './styles/index.css';
import { getAllProducts, getProductById } from './requests/products';
import {
  createAllProdacts,
  createProdactMarkup,
} from './services/markupService';
import { pushNewProduct } from './requests/posts';

const list = document.querySelector('#allProducts');
const productForm = document.querySelector('#singleProductForm');
const containerProduct = document.querySelector('#singleProduct');

productForm.addEventListener('submit', handlerFormSubmit);

async function handlerFormSubmit(event) {
  event.preventDefault();
  const id = event.currentTarget.elements.id.value;
  const data = await getProductById(id);
  containerProduct.innerHTML = createProdactMarkup(data);
}

async function renderAllProdacts() {
  const data = await getAllProducts();
  console.log(data.products);
  const markup = createAllProdacts(data.products);
  list.innerHTML = markup;
}
// renderAllProdacts();

const formPushNewProduct = document.querySelector('#newProduct');

async function handlerSubForm(event) {
  event.preventDefault();
  const title = event.target.title.value;
  const description = event.target.description.value;
  const price = event.target.price.value;
  const data = await pushNewProduct(title, description, price);
  console.log(data);
}

formPushNewProduct.addEventListener('submit', handlerSubForm);
