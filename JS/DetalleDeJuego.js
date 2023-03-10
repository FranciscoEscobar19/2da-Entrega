const apiJuegos = "http://localhost:3000/Juegos"
const detalleVideo = document.getElementById("detalleVideo");
const detalleImagenes = document.getElementById("detalleImagenes");
const detallePortada = document.getElementById("detallePortada");
const detalleNombre = document.getElementById("detalleNombre")
const detalleDescripcion= document.getElementById("detalleDescripcion")
const detalleFechaDesa = document.getElementById("detalleFechaDesa")
const detallePrecio = document.getElementById("detallePrecio")
const detalleCategoria = document.getElementById("detalleCategoria")
const idjuegos = window.location.hash.substring(1);

const confirmaciónLogueo =()=>{
    const UsuarioLogueado = localStorage.getItem ('UsuarioLogueado');
    const AdminLogueado = localStorage.getItem ('AdminLogueado');
    if(!UsuarioLogueado && !AdminLogueado) {
        alert("Debes Loguearte para ingresar a este sitio")
        return window.location = '/index.html';
     }
    }
    confirmaciónLogueo()

const mostrarPerfil = ()=>{
    fetch(apiJuegos)
    .then ((response)=>response.json())
    .then (perfilJuego =>{ 
        perfilJuego.forEach(e => {
            if(e.id == idjuegos){
                
                const soyvideo = document.createElement("div");
                soyvideo.innerHTML=`
                <video autoplay loop muted class="img-fluid" controls source src="${e.urlVideo}" type="video/mp4"></video>
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

                const soycategoria =document.createElement("div");
                soycategoria.innerHTML=`
                <h4> Categoría: ${e.categoria} </h4>
                `;
                detalleCategoria.append(soycategoria)
                
                const soyPrecio=document.createElement("div");
                soyPrecio.innerHTML=`
                <h4>Precio: $${e.precio} </h4>
                `;
                detallePrecio.append(soyPrecio);

                const soyfechadesa= document.createElement("div")
                soyfechadesa.innerHTML=`
                <p class="fw-bolder"> Fecha de lanzamiento: ${e.fechaLanzamiento}</p> 
                <p class="fw-bolder"> Desarrolladores: ${e.desarrollador}</p> 
                `;
                detalleFechaDesa.append(soyfechadesa);

                const soydescripcion=document.createElement("div")
                soydescripcion.innerHTML=`
                <h5 class="d-flex fw-semibold m-2 text-center">${e.descripción} </h5>
                `;
                detalleDescripcion.append(soydescripcion);
            }
            })
            })   
    .catch (error => console.error(error));
        };
mostrarPerfil()

const ConfirmaciónLogueo =()=>{
    const UsuarioLogueado = localStorage.getItem ('UsuarioLogueado');
    const AdminLogueado = localStorage.getItem ('AdminLogueado');
    if(UsuarioLogueado) {
        cerrarSecion.style.display = "block";
        iniciarSecion.style.display = "none";
        AdminRegister.style.display = "none"
     } else if (AdminLogueado ){
        AdminGames.style.display = "block";
        cerrarSecion.style.display = "block";
        iniciarSecion.style.display = "none";
        AdminRegister.style.display = "none"
     }
}

ConfirmaciónLogueo()

const CerrarSecion =()=>{
    const UsuarioLogueado = localStorage.getItem ('UsuarioLogueado');
    const AdminLogueado = localStorage.getItem ('AdminLogueado');
    cerrarSecion.addEventListener ("click",()=>{
    if(UsuarioLogueado){
        localStorage.removeItem('UsuarioLogueado');
        window.location.reload()
    }else if(AdminLogueado){
        localStorage.removeItem('AdminLogueado');
        window.location.reload()
    }
    })
}
CerrarSecion()