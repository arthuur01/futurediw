fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    const productList = document.getElementById('product-list');
    data.forEach(product => {
      const productItem = document.createElement('div');
      productItem.innerHTML = `
        <h4>${product.title}</h4>
        <p>${product.description}</p>
        <strong>Price: $${product.price}</strong>
        <hr>
      `;
      productList.appendChild(productItem);
    });
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });