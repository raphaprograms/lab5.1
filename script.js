const productInput = document.getElementById('product-input');
const priceInput = document.getElementById('price-input');
const addItemBtn = document.getElementById('add-item-button');
const cart = document.getElementById('cart');
const productList = document.getElementById('list');
const cartItemCount = document.getElementById('count');
const cartPriceCount = document.getElementById('price');

const pricesTracker = [];

addItemBtn.addEventListener('click', function() {
    // get input
    const productName = productInput.value;
    const productPrice = Number(priceInput.value);

    if (productName == '' || productPrice == NaN || productPrice == '' || productPrice <= 0) {
        alert('Plese enter a valid product name and only a possitve number for price!')
        return;
    }

    console.log(productName);
    console.log(productPrice);

    // create list item
    const product = document.createElement('li');
    product.textContent = `${productName} ${productPrice}`;
    product.classList.add('item');


    // add price to array for price tracking
    pricesTracker.push(productPrice);
    console.log(pricesTracker);

    // create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove');

    product.appendChild(removeBtn);

    cart.appendChild(product);
    
    countProducts();
    trackPrices();

    productInput.focus();

});

cart.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove')) {
        const listItem = event.target.closest('li');

        // find all li items to get the index of the one to be removed
        const items = Array.from(cart.querySelectorAll('.item'));
        const index = items.indexOf(listItem);

        // remove the price from the pricesTracker array
        if (index > -1) {
            pricesTracker.splice(index, 1);
        }

        listItem.remove();

        countProducts();
        trackPrices();
    }

    console.log(pricesTracker);

    if (event.target.classList.contains('item')) {
        event.target.classList.toggle('completed');
    }
});


function countProducts() {
    const products = document.getElementsByClassName('item');
    console.log(products.length);

    cartItemCount.textContent = products.length;
}

function trackPrices() {
    let totalPrice = pricesTracker.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    cartPriceCount.textContent = `$${totalPrice}`;
}