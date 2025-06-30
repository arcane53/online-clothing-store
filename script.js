// Optional interactivity
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
  button.addEventListener('click', function () {
    const product = this.getAttribute('data-product');
    console.log(`${product} added to cart!`);
  });
});
