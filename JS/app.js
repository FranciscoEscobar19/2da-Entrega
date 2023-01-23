
const apiJuegos = "http://localhost:3000/Juegos"
const catGuerra = document.getElementById ("catGuerra");
const catAventura = document.getElementById("catAventura");
const catCarreras = document.getElementById ("catCarreras");
const catDeportes = document.getElementById("catDeportes");
const idSlider = document.getElementById ("idSlider")
const categorias =[];

const Categorias = ()=> {
    fetch(apiJuegos)
    .then ((response)=>response.json())
    .then (verCat =>{
        verCat.forEach(e=> {
            const nombreCategoria =e.categoria;
        if (!categorias[nombreCategoria]) categorias[nombreCategoria]=[];
        categorias[nombreCategoria].push(e)   
        switch (nombreCategoria){
            case "Acción":
                const verguerra = document.createElement("div")
                verguerra.className="clasecard"
                verguerra.innerHTML =`
                    <div class="card vercardsje" style="width: 18rem;">
                    <img src="${e.urlPortada}" class="card-img-top" alt="${e.altImagen}">
                    <div class="card-body">
                    <h5 class="card-title">${e.nombre}</h5>
                    <p class="card-text">$${e.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="showProfile('${e.id}')">Go somewhere</a>
                    </div>
                    </div>
                    `;
                catGuerra.append(verguerra)
                    
             break;
            case "Aventura":
                 const veraventura = document.createElement("div")
                 veraventura.className="clasecard"
                veraventura.innerHTML =`
                        <div class="card vercardsje" style="width: 18rem;">
                        <img src="${e.urlPortada}" class="card-img-top" alt="${e.altImagen}">
                        <div class="card-body">
                        <h5 class="card-title">${e.nombre}</h5>
                        <p class="card-text">$${e.precio}</p>
                        <a href="#" class="btn btn-primary" onclick="showProfile('${e.id}')">Go somewhere</a>
                        </div>
                        </div>
                        `;
                catAventura.append(veraventura)
             break;
            case "Carreras":
                 const verCarreras = document.createElement("div")
                 verCarreras.className="clasecard"
                verCarreras.innerHTML =`
                            <div class="card vercardsje" style="width: 18rem;">
                            <img src="${e.urlPortada}" class="card-img-top" alt="${e.altImagen}">
                            <div class="card-body">
                            <h5 class="card-title">${e.nombre}</h5>
                            <p class="card-text">$${e.precio}</p>
                            <a href="#" class="btn btn-primary" onclick="showProfile('${e.id}')">Go somewhere</a>
                            </div>
                            </div>
                              `;
                catCarreras.append(verCarreras);
             break;
             case "Deportes":
                const verdeportes = document.createElement("div")
                verdeportes.className="clasecard"
                verdeportes.innerHTML =`
                            <div class="card vercardsje" style="width: 18rem;">
                            <img src="${e.urlPortada}" class="card-img-top" alt="${e.altImagen}">
                            <div class="card-body">
                            <h5 class="card-title">${e.nombre}</h5>
                            <p class="card-text">$${e.precio}</p>
                            <a href="#" class="btn btn-primary" onclick="showProfile('${e.id}')">Go somewhere</a>
                            </div>
                            </div>
                            `;
                catDeportes.append(verdeportes)
            break;
            default:
                console.log ("No hay categorias existentes")  
            }
        })
    })
    .catch (error => console.error(error));
}
Categorias()

const slider = () =>{
    fetch(apiJuegos)
    .then ((response)=>response.json())
    .then (sliderTrue =>{
        sliderTrue.forEach(e => {
            const sliderCheck = e.Favorito;
            switch (sliderCheck){
                case "true":
                    const verSlider = document.createElement("div")
                    verSlider.innerHTML=`
                    <div id="idSlider"class="carousel-item active">
                    <img src="${e.urlPortada}" class="d-block w-100" alt="${e.altImagen}">
                    <div class="carousel-caption d-none d-md-block ">
                      <h5 class="colorLetraSlider">${e.nombre}</h5>
                      <h5 class="colorLetraSlider">${e.categoria}</h5>
                      <p class="colorLetraSlider" >${e.descripción}</p>
                      <a href="#" class="btn btn-primary" onclick="showProfile('${e.id}')">Ver Mas</a>
                    </div>
                  </div>
                    `
                    idSlider.append(verSlider)
                break;
            }
        })

})
    .catch (error => console.error(error));
}
slider()

const showProfile = (id)=>{
    window.location =`../HTML/DetallesDeJuego.html#${id}`;
}