const apiJuegos = "http://localhost:3000/Juegos"
const nuevoHtml = document.getElementById("nuevoHtml");
const idjuegos = window.location.hash.substring(1);

const mostrarPerfil = ()=>{
    fetch(apiJuegos)
    .then ((response)=>response.json())
    .then (perfilJuego =>{ 
        perfilJuego.forEach(e => {
            if(e.id == idjuegos){
                const soyjuego = document.createElement("div");
                soyjuego.innerHTML=`
                <P> ${e.nombre}</p>
                `
                nuevoHtml.append(soyjuego)
            }
            })
            })   
        };
mostrarPerfil()
