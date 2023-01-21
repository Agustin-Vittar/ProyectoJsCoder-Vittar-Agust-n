const renderLibros = () => {
    const libros_favoritos = cargarLibrosFavoritos();
    let output = "";
   
    if (totalFav() > 0) {
        for (let libro of libros_favoritos) {
            output += `
            
            <div class="col-md-3 d-flex justify-content-center p-3 ">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top text-center m-auto" style="height: 350px; width: 100%;" src="img/${libro.imagen}" alt="${libro.nombre}">
                <div class="card-body row d-flex align-items-end">
                    <h5 class="card-title">${libro.nombre}</h5>
                    <p class="card-text">${libro.resumen}</p>
                    <a href="#" onClick="sacarFavoritos(${libro.id});" class="btn btn-dark ">Quitar de Favoritos</a>
                </div>
                </div>
            </div>
            
        `
          
        }
    } else {
        output = `<div class="alert alert-info mt-5 text-center w-50 m-auto" role="alert">
            Todavía no se han agregado libros a favoritos!
        </div>`
    }
    

    

    document.getElementById("libros_favoritos").innerHTML = output;
}

renderLibros();
renderBotonFav();