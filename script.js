const productInput = document.getElementById('product-input');
const priceInput = document.getElementById('price-input');
const addItemBtn = document.getElementById('add-item-button');
const cart = document.getElementById('cart');
const productList = document.getElementById('list');
const cartItemCount = document.getElementById('count');
const cartPriceCount = document.getElementById('price');

addItemBtn.addEventListener('click', function() {
    // get input
    const productName = productInput.value;
    const productPrice = priceInput.value;

    console.log(productName);
    console.log(productPrice);

    // create list item
    const product = document.createElement('li');
    product.textContent = `${productName} ${productPrice}`;
    product.classList.add('item');

    // create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove');

    product.appendChild(removeBtn);

    cart.appendChild(product);
    
    countProducts();

});

cart.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove')) {
        event.target.closest('li').remove();

        countProducts();
    }

    if (event.target.classList.contains('item')) {
        event.target.classList.toggle('completed');
    }
});


function countProducts() {
    const products = document.getElementsByClassName('item');
    console.log(products.length);

    cartItemCount.textContent = products.length;
}