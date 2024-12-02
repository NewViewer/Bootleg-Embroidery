function redirigir() {
    const categoriaSeleccionada = document.getElementById("producto").value; // Obtener la categoría seleccionada
    const productos = document.querySelectorAll(".gallery .design"); // Obtener todos los productos

    // Iterar sobre todos los productos y mostrar solo los que coinciden con la categoría
    productos.forEach(function(producto) {
        // Si la categoría está vacía (Mostrar todo), mostramos todos los productos
        if (categoriaSeleccionada === "" || producto.classList.contains(categoriaSeleccionada.toLowerCase())) {
            producto.style.display = "block"; // Mostrar el producto
        } else {
            producto.style.display = "none"; // Ocultar el producto
        }
    });
}