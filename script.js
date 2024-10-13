const productos = [
    { nombre: "Laptop", precio: 15000 },
    { nombre: "Desktop", precio: 12000 },
    { nombre: "Monitor", precio: 4000 },
    { nombre: "Teclado mecánico", precio: 1500 },
    { nombre: "Mouse", precio: 800 },
    { nombre: "Impresora", precio: 2500 },
    { nombre: "Escáner", precio: 2000 },
    { nombre: "Cámara web", precio: 1200 },
    { nombre: "Disco duro externo", precio: 3000 },
    { nombre: "Memoria USB 64GB", precio: 600 },
    { nombre: "Router WiFi", precio: 1200 },
    { nombre: "Silla ergonómica", precio: 3000 },
    { nombre: "Escritorio", precio: 5000 },
    { nombre: "Parlantes", precio: 1800 },
    { nombre: "Laptop gaming", precio: 25000 },
    { nombre: "Tarjeta gráfica", precio: 8000 },
    { nombre: "Placa madre", precio: 3000 },
    { nombre: "Procesador", precio: 7000 },
    { nombre: "RAM 16GB", precio: 2000 },
    { nombre: "SSD 1TB", precio: 4000 },
    { nombre: "Auriculares", precio: 1200 },
];

const filtrarPorPrecio = (min, max) => {
    return productos.filter(producto => producto.precio >= min && producto.precio <= max);
};


const buscarPorNombre = (nombre) => {
    return productos.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
};


const mostrarProductos = (productosFiltrados) => {
    const listaProductos = document.getElementById('lista-productos');
    listaProductos.innerHTML = ''; 
    if (productosFiltrados.length === 0) {
        listaProductos.innerHTML = '<li>No se encontraron productos.</li>';
        return;
    }
    productosFiltrados.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio} MXN`;
        listaProductos.appendChild(li);
    });



};

document.getElementById('btn-limpiar').addEventListener('click', () => {
    mostrarProductos([]); 
    document.getElementById('precio-min').value = '';   
    document.getElementById('precio-max').value = ''; 
    document.getElementById('nombre').value = ''; 
});


document.getElementById('formulario-precio').addEventListener('submit', (evento) => {
    evento.preventDefault(); 
    const min = document.getElementById('precio-min').value;
    const max = document.getElementById('precio-max').value;
    const productosFiltrados = filtrarPorPrecio(Number(min), Number(max));
    mostrarProductos(productosFiltrados); 
});

document.getElementById('formulario-nombre').addEventListener('submit', (evento) => {
    evento.preventDefault(); 
    const nombre = document.getElementById('nombre').value;
    const productoEncontrado = buscarPorNombre(nombre);
    if (productoEncontrado) {
        mostrarProductos([productoEncontrado]); 
    } else {
        mostrarProductos([]); 
    }



});
