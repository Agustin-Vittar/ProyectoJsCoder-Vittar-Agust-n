const renderLibros = () => {
    const libros = cargarLibrosLS();
    let output = "";

    for (let libro of libros) {
        output += `<div class="col-md-3">
        <div class="card text-center border-0 mt-5">
        <img class="card-img-top text-center m-auto" style="height: 350px; width: 250px;" src="img/${libro.imagen}" alt="${libro.nombre}">
        <div class="card-body">
          <h5 class="card-title">${libro.nombre}</h5>
          <p class="card-text">ISBN: ${libro.ISBN}</p>
          <a href="#" onClick="agregarFavoritos(${libro.id});" class="btn btn-dark">Añadir a favoritos</a>
        </div>
      </div>
      </div>`
      
    }

    document.getElementById("libros").innerHTML = output;
}

renderLibros();
renderBotonFav();
