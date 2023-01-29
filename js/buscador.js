$(document).ready(function(){
    var item, title, author, publisher, bookLink, bookImg;
    var salida = document.getElementById("list-output");
    var bookUrl = "https://www.googleapis.com/books/v1/volumes?q="
    var apiKey = "key=AIzaSyDtXC7kb6a7xKJdm_Le6_BYoY5biz6s8Lw";
    var placeHolder = '<img src="https://via.placeholder.com/150">'
    var buscarData;

    $("#buscar").click(function(){
        salida.innerHTML = ""
        buscarData = $("#buscardor").val();
    
        if (buscarData === "" || buscarData === null) {
            displayError();
        } else {
            $.ajax({
                url: bookUrl + buscarData,
                dataType: "json",
                success: function(res) {
                    console.log(res)
                    if(res.totalItem === 0) {
                        alert("No hay resultado!! trata otra vez");
                    } else {
                        $("title").animate({'margin-top': '5px'}, 1000);
                        $(".listaLibros").css("visibility", "visible");
                        displayResults(res);
                    }
            
                },
                error: function() {
                    alert("Algo salió mal!");
                } 
            })
        }
        $("#buscardor").val("");
    });
    
    function displayResults(res) {
        for(var i = 0; i < res.items.length; i+=2) {
            item = res.items[i];
            title1 = item.volumeInfo.title;
            author1 = item.volumeInfo.authors;
            publisher1 = item.volumeInfo.publisher;
            bookLink1 = item.volumeInfo.previewLink;
            bookIsbn = item.volumeInfo.industryIdentifiers[1].identifier
            bookImg1 = (item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail : placeHolder;
    
            item2 = res.items[i+1];
            title2 = item2.volumeInfo.title;
            author2 = item2.volumeInfo.authors;
            publisher2 = item2.volumeInfo.publisher;
            bookLink2 = item2.volumeInfo.previewLink;
            bookIsbn2 = item2.volumeInfo.industryIdentifiers[1].identifier
            bookImg2 = (item2.volumeInfo.imageLinks) ? item2.volumeInfo.imageLinks.thumbnail : placeHolder;
    
            salida.innerHTML += '<div class="row mt-4">' +
            formatOutput(bookImg1, title1, author1, publisher1, bookLink1, bookIsbn) +
            formatOutput(bookImg2, title2, author2, publisher2, bookLink2, bookIsbn2) +
            '</div>';

            console.log(salida);
    
        }
    }

    function formatOutput(bookImg, title, author, publisher, bookLink, bookIsbn) {
        var viewUrl = 'book.html?isbn='+bookIsbn;
        var card = `<div class="col-lg-6">
        <div class="card" style="">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="${bookImg}" class="card-img" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">Autor: ${author}</p>
                <p class="card-text">Editorial: ${publisher}</p>
                <a target="_blank" href="${viewUrl}" class="btn btn-secondary">Lee este libro</a>
              </div>
            </div>
          </div>
        </div>
      </div>`
      return card;
    }

    function displayError() {
        alert("El campo de busqueeda no debe estar vacío!")
    }
});





