const handleInputChange = debounce(event => {
    const query = event.target.value.trim();
    if (query) {
      const results = searchProducts(query);
      generateTableRows(results);
    } else {
      resultsContainer.innerHTML = '';
    }
  }, 300);

function searchProducts(query) {
  const normalizedQuery = query.toLowerCase();
  return products.filter((product) =>
    product.searchKey.includes(normalizedQuery)
  );
}

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}
