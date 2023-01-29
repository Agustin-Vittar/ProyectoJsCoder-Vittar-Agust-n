const guardarLibrosFavoritos = (libros) => {
    localStorage.setItem("favoritos", JSON.stringify(libros));
}

const cargarLibrosFavoritos = () => {
    return JSON.parse(localStorage.getItem("favoritos")) || [];
}

const agregadoAFav = (id) => {
    const libros_favoritos = cargarLibrosFavoritos();

    return libros_favoritos.some(item => item.id === id);
}

const agregarFavoritos = (id) => {
    const libros = cargarLibrosLS();
    const libros_favoritos = cargarLibrosFavoritos();

    if (agregadoAFav(id)) {
        let pos = libros_favoritos.findIndex(item => item.id === id);
        libros_favoritos[pos].cantidad -= 1;
        alert("Este libro ya ha sido agregado a favoritos!");
    } else {
        const libro = libros.find(item => item.id === id);
        libro.cantidad = 1;
        libros_favoritos.push(libro);
    }

    event.preventDefault();
    guardarLibrosFavoritos(libros_favoritos);
    renderBotonFav();
}

const sacarFavoritos = (id) => {
    const libros_favoritos = cargarLibrosFavoritos();
    const actulibro = libros_favoritos.filter(item => item.id !== id);
    guardarLibrosFavoritos(actulibro);
    event.preventDefault();
    renderBotonFav();
    renderLibros();
}

const totalFav = () => {
    const libros_favoritos = cargarLibrosFavoritos();

    return libros_favoritos.length;
}

const renderBotonFav = () => {
    let salida = `<button type="button" class="btn btn-light mt-5">
    <img src="img/icons-agregar-a-favoritos.png" alt="Botón favoritos" width="32"> 
    Favoritos <span class="badge text-bg-secondary">${totalFav()}</span>
  </button>
    `;
    document.getElementById("boton_fav").innerHTML = salida;
}