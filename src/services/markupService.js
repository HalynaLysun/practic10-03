export function createAllProdacts(array) {
  return array
    .map(
      a =>
        `<li><img src="${a.thumbnail}" alt=""><h3>brand: ${a.title}</h3><p>price: ${a.price}</p></li>`
    )
    .join('');
}

export function createProdactMarkup(a) {
  return `<div><img src="${a.thumbnail}" alt=""><h3>brand: ${a.title}</h3><p>price: ${a.price}</p></div>`;
}
