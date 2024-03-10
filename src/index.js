import './styles/normalize.css';
import './styles/index.css';
import { getAllProducts } from './requests/products';
import { createAllProdacts } from './services/markupService';

// getAllProducts().then(console.log)

// console.log(getAllProducts());
const list = document.querySelector('#allProducts');
// console.log(list);

async function renderAllProdacts() {
  const data = await getAllProducts();
  console.log(data.products);
  const markup = createAllProdacts(data.products);
  list.innerHTML = markup;
}
renderAllProdacts();
// thumbnail
// :
// "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
// title
// :
// "iPhone 9"
