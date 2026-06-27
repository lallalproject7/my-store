// Productos de RENFLAMME
let productos = [
    { nombre: "Nordic Pine", precio: 299, imagen: "images/ionela-mat-09N3Du664dw-unsplash.jpg" },
    { nombre: "Arctic Bloom", precio: 319, imagen: "images/ionela-mat-36E87eXEOns-unsplash.jpg" },
    { nombre: "Warm Amber", precio: 299, imagen: "images/ionela-mat-ZG7raWjUTmw-unsplash.jpg" }
]

// Carrito vacío
let carrito = []

// Crear las tarjetas de productos automáticamente
function mostrarProductos() {
    let contenedor = document.querySelector(".product-grid")
    contenedor.innerHTML = ""

    for (let i = 0; i < productos.length; i++) {
        let producto = productos[i]

        contenedor.innerHTML += `
            <div class="product-card">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p class="price">${producto.precio} NOK</p>
                <div class="product-buttons">
                    <button class="add-to-cart-btn" onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">Add to cart</button>
                    <button class="favorite-btn"><i class="fa fa-heart"></i></button>
                </div>
            </div>
        `
    }
}