const apiJuegos = "http://localhost:3000/Juegos"
const detalleVideo = document.getElementById("detalleVideo");
const detalleImagenes = document.getElementById("detalleImagenes");
const detallePortada = document.getElementById("detallePortada");
const detalleNombre = document.getElementById("detalleNombre")
const detalleDescripcion= document.getElementById("detalleDescripcion")
const detalleFechaDesa = document.getElementById("detalleFechaDesa")
const idjuegos = window.location.hash.substring(1);

const mostrarPerfil = ()=>{
    fetch(apiJuegos)
    .then ((response)=>response.json())
    .then (perfilJuego =>{ 
        perfilJuego.forEach(e => {
            if(e.id == idjuegos){
                
                const soyvideo = document.createElement("div");
                soyvideo.innerHTML=`
                <video autoplay loop muted class="img-fluid" source src="${e.urlVideo}" type="video/mp4"></video>
                `
                detalleVideo.append(soyvideo);

                const soyimagenes = document.createElement("div");
                soyimagenes.innerHTML=`
                <div class="d-flex justify-content-center">
                <img class="d-flex m-1  tamañoSoyImagen " src="${e.urlImagen1}"> </img>
                <img  class="d-flex m-1 tamañoSoyImagen " src="${e.urlImagen2}"> </img>
                <img  class="d-flex m-1 tamañoSoyImagen " src="${e.urlImagen3}"> </img>
                <img  class="d-flex m-1 tamañoSoyImagen " src="${e.urlImagen4}"> </img>
                </div>
                `;
                detalleImagenes.append(soyimagenes);

                const soyportada = document.createElement("div");
                soyportada.innerHTML=`
                <img class="d-flex justify-content-center m-2" src="${e.urlPortada}"> </img>
                `;
                detallePortada.append(soyportada);

                const soynombre=document.createElement("div");
                soynombre.innerHTML=`
                <h2 class="  "> ${e.nombre} </h2>
                `;
                detalleNombre.append(soynombre);

                const soydescripcion=document.createElement("div")
                soydescripcion.innerHTML=`
                <h5 class="d-flex fw-semibold">${e.descripción} </h5>
                <h4>Precio: $${e.precio} </h4>
                `;
                detalleDescripcion.append(soydescripcion);

                const soyfechadesa= document.createElement("div")
                soyfechadesa.innerHTML=`
                <p class="fw-bolder"> Fecha de lanzamiento: ${e.fechaLanzamiento}</p> 
                <p class="fw-bolder"> Desarrolladores: ${e.desarrollador}</p> 
                `;
                detalleFechaDesa.append(soyfechadesa);
            }
            })
            })   
        };
mostrarPerfil()