document.addEventListener('DOMContentLoaded', function() {
    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartOverlay = document.querySelector('.cart-overlay');
    const closeCartButton = document.querySelector('.close-cart');

    // Add click event to all "Add to Cart" buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Show cart overlay
            cartOverlay.classList.add('visible');
            // Prevent body scrolling
            document.body.style.overflow = 'hidden';
        });
    });

    // Close cart when clicking the close button
    closeCartButton.addEventListener('click', function() {
        cartOverlay.classList.remove('visible');
        document.body.style.overflow = '';
    });
}); 