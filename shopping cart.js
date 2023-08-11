$(document).ready(function() {
    var products = [
        { id: 1, name: 'Sweet Like Hunny', price: 10.00 },
        // Add more products if needed
    ];
    var cartItems = [];

    // Function to update the cart display
    function updateCartDisplay() {
        var cartSection = $('#cart-items');
        var cartTotal = $('#cart-total');
        var total = 0;

        cartSection.empty();

        cartItems.forEach(item => {
            cartSection.append(`<li>${item.name} - $${item.price.toFixed(2)}</li>`);
            total += item.price;
        });

        cartTotal.text(`Total: $${total.toFixed(2)}`);
    }

    // Add to cart button click event on the home page
    $('.add-to-cart-home').on('click', function() {
        var productId = parseInt($(this).data('id'));
        var selectedProduct = products.find(product => product.id === productId);

        if (selectedProduct) {
            cartItems.push(selectedProduct);
            updateCartDisplay();
        }
    });

    // Checkout button click event
    $('#checkout-btn').on('click', function() {
        if (cartItems.length > 0) {
            alert('Thank you for your purchase!');
            cartItems = [];
            updateCartDisplay();
        } else {
            alert('Your cart is empty. Add items before checking out.');
        }
    });
});
$(document).ready(function() {
    var products = [
        { id: 1, name: 'Sweet Like Hunny', price: 10.00 },
        { id: 2, name: 'Kylash Volume Mascara', price: 17.00 },
        { id: 3, name: 'The Classic Matte Pavarte', price: 66.00 }
    ];
    var cartItems = [];

    // Display products
    var productsSection = $('#products');
    products.forEach(product => {
        productsSection.append(`
            <div class="product">
                <h3>${product.name}</h3>
                <p>Price: $${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `);
    });

    // Add to cart button click event
    $('.add-to-cart').on('click', function() {
        var productId = parseInt($(this).data('id'));
        var selectedProduct = products.find(product => product.id === productId);
        cartItems.push(selectedProduct);
        updateCart();
    });

    // Update cart
    function updateCart() {
        var cartSection = $('#cart-items');
        cartSection.empty();
        var total = 0;

        cartItems.forEach(item => {
            cartSection.append(`
                <li>${item.name} - $${item.price.toFixed(2)}</li>
            `);
            total += item.price;
        });

        $('#cart-total').text(`$${total.toFixed(2)}`);
    }

    // Checkout button click event
    $('#checkout-btn').on('click', function() {
        alert('Thank you for your purchase!');
        cartItems = [];
        updateCart();
    });
});