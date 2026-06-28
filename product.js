// Get product id from URL
let params = new URLSearchParams(window.location.search)
let id = parseInt(params.get("id"))

// Get product from array
let currentProduct = products[id]

// Show product details on page
document.getElementById("product-image").src = currentProduct.image
document.getElementById("product-image").alt = currentProduct.name
document.getElementById("product-name").textContent = currentProduct.name
document.getElementById("product-description").textContent = currentProduct.description
document.getElementById("product-ingredients").textContent = currentProduct.ingredients
document.getElementById("product-price").textContent = currentProduct.price + " NOK"
document.title = currentProduct.name + " - RENFLAMME"

// Add to cart from product page
function addToCart() {
    cart.push(currentProduct)
    updateCounter()
    console.log("Cart:", cart)
}