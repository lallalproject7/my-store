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
    let existing = cart.find(item => item.index === index)
    if (existing) {
        existing.quantity++
    } else {
        let product = products[index]
        cart.push({ ...product, index: index, quantity: 1 })
    }
    updateCounter()
    showNotification(products[index].name)
    console.log("Cart:", cart)
}

// Show notification
function showNotification(name) {
    let notification = document.getElementById("notification")
    notification.textContent = name + " added to cart"
    notification.classList.add("show")
    setTimeout(() => {
        notification.classList.remove("show")
    }, 2000)
}

// Update cart icon counter
function updateCounter() {
    let total = 0
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].quantity
    }
    document.querySelector(".cart-count").textContent = total
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
        document.querySelector(".cart-total span").textContent = "0 NOK"
        return
    }

    for (let i = 0; i < cart.length; i++) {
        let item = cart[i]
        total += item.price * item.quantity

        cartItems.innerHTML += `
            <div class="cart-item" onclick="window.location.href='product.html?id=${item.index}'">
                <p>${item.name}</p>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="event.stopPropagation(); changeQty(${i}, -1)">−</button>
                    <span class="qty">${item.quantity}</span>
                    <button class="qty-btn" onclick="event.stopPropagation(); changeQty(${i}, 1)">+</button>
                </div>
                <span>${item.price * item.quantity} NOK</span>
                <button class="remove-btn" onclick="event.stopPropagation(); removeFromCart(${i})">✕</button>
            </div>
        `
    }

    document.querySelector(".cart-total span").textContent = total + " NOK"
}

// Change quantity
function changeQty(index, change) {
    cart[index].quantity += change
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1)
    }
    updateCounter()
    renderCart()
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1)
    updateCounter()
    renderCart()
}

// When page loads, show products
showProducts()