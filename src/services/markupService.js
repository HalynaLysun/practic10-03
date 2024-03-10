export function createAllProdacts(array) {
  return array
    .map(
      ({ thumbnail, title, price }) =>
        `<li><img src="${thumbnail}" alt=""><h3>brand: ${title}</h3><p>price: ${price}</p></li>`
    )
    .join('');
}
