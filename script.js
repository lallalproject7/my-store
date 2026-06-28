// RENFLAMME Products
let products = [
    { 
        name: "Nordic Pine", 
        price: 299, 
        description: "Pine, cedarwood and fresh air. The scent of a Norwegian forest.",
        ingredients: "Soy wax, cedarwood essential oil, pine essential oil, cotton wick",
        image: "images/ionela-mat-09N3Du664dw-unsplash.jpg" 
    },
    { 
        name: "Arctic Bloom", 
        price: 319, 
        description: "Wild flowers and moss. The brief, beautiful Norwegian summer.",
        ingredients: "Coconut wax, wildflower essential oil, moss extract, cotton wick",
        image: "images/ionela-mat-36E87eXEOns-unsplash.jpg" 
    },
    { 
        name: "Warm Amber", 
        price: 299, 
        description: "Amber, vanilla and sandalwood. Warmth for dark winter evenings.",
        ingredients: "Soy wax, amber essential oil, vanilla extract, sandalwood oil, cotton wick",
        image: "images/ionela-mat-ZG7raWjUTmw-unsplash.jpg" 
    }
]

// Empty cart
let cart = []

// Generate product cards automatically
function showProducts() {
    let container = document.querySelector(".product-grid")
    container.innerHTML = ""

    for (let i = 0; i < products.length; i++) {
        let product = products[i]

        container.innerHTML += `
            <div class="product-card" onclick="window.location.href='product.html?id=${i}'">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="ingredients"><strong>Ingredients:</strong> ${product.ingredients}</p>
                <p class="price">${product.price} NOK</p>
                <div class="product-buttons">
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${i})">Add to cart</button>
                    <button class="favorite-btn" onclick="event.stopPropagation()"><i class="fa fa-heart"></i></button>
                </div>
            </div>
        `
    }
}

// Add product to cart
function addToCart(index) {
    let product = products[index]
    cart.push(product)
    updateCounter()
    console.log("Cart:", cart)
}

// Update cart icon counter
function updateCounter() {
    let counter = document.querySelector(".cart-count")
    counter.textContent = cart.length
}

// Open cart panel
function openCart() {
    document.querySelector(".cart-panel").classList.add("cart-open")
    document.querySelector(".cart-overlay").classList.add("overlay-open")
    renderCart()
}

// Close cart panel
function closeCart() {
    document.querySelector(".cart-panel").classList.remove("cart-open")
    document.querySelector(".cart-overlay").classList.remove("overlay-open")
}

// Show cart items in panel
function renderCart() {
    let cartItems = document.querySelector(".cart-items")
    let total = 0
    cartItems.innerHTML = ""

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>"
        return
    }

    for (let i = 0; i < cart.length; i++) {
        let item = cart[i]
        total += item.price

        cartItems.innerHTML += `
            <div class="cart-item">
                <p>${item.name}</p>
                <span>${item.price} NOK</span>
                <button class="remove-btn" onclick="removeFromCart(${i})">✕</button>
            </div>
        `
    }

    document.querySelector(".cart-total span").textContent = total + " NOK"
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1)
    updateCounter()
    renderCart()
}

// When page loads, show products
showProducts()