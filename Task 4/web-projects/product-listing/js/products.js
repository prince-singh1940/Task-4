const products = [
    {
        id: 1,
        name: "Product 1",
        category: "Category A",
        price: 29.99,
        rating: 4.5
    },
    {
        id: 2,
        name: "Product 2",
        category: "Category B",
        price: 19.99,
        rating: 4.0
    },
    {
        id: 3,
        name: "Product 3",
        category: "Category A",
        price: 39.99,
        rating: 5.0
    },
    {
        id: 4,
        name: "Product 4",
        category: "Category C",
        price: 24.99,
        rating: 3.5
    },
    {
        id: 5,
        name: "Product 5",
        category: "Category B",
        price: 49.99,
        rating: 4.8
    }
];

function filterProducts(category) {
    return products.filter(product => product.category === category);
}

function sortProductsByPrice(order = 'asc') {
    return products.sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);
}

function sortProductsByRating(order = 'asc') {
    return products.sort((a, b) => order === 'asc' ? a.rating - b.rating : b.rating - a.rating);
}

function displayProducts(productList) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';
    productList.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>Rating: ${product.rating} stars</p>
        `;
        productContainer.appendChild(productElement);
    });
}

// Example usage
displayProducts(products);