
const apiJuegos = "http://localhost:3000/Juegos"
const catGuerra = document.getElementById ("catGuerra");
const catAventura = document.getElementById("catAventura");
const catCarreras = document.getElementById ("catCarreras");
const catDeportes = document.getElementById("catDeportes");
const idSlider = document.getElementById ("idSlider")
const loginForm = document.getElementById ("loginForm");
const AdminUsers = document.getElementById ("AdminUsers");
const AdminGames = document.getElementById ("AdminGames");
const cerrarSecion = document.getElementById ("cerrarSecion");
const iniciarSecion =document.getElementById ("iniciarSecion")
const AdminRegister = document.getElementById ("AdminRegister")
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
                    <div class="card vercardsje" style="width: 18rem; background-color: black;">
                    <img src="${e.urlPortada}" class="card-img-top" alt="${e.altImagen}">
                    <div class="card-body">
                    <h5 class="card-title">${e.nombre}</h5>
                    <p class="card-text">$${e.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="showProfile('${e.id}')">Conocé mas</a>
                    </div>
                    </div>
                    `;
                catGuerra.append(verguerra)
                    
             break;
            case "Aventura":
                 const veraventura = document.createElement("div")
                 veraventura.className="clasecard"
                veraventura.innerHTML =`
                        <div class="card vercardsje " style="width: 18rem; background-color: black;">
                        <img src="${e.urlPortada}" class="card-img-top" alt="${e.altImagen}">
                        <div class="card-body">
                        <h5 class="card-title">${e.nombre}</h5>
                        <h4 class="card-text ">$${e.precio}<a href="#" class="btn btn-primary ms-5" onclick="showProfile('${e.id}')">Conocé mas</a></h4>
                        
                        </div>
                        </div>
                        `;
                catAventura.append(veraventura)
             break;
            case "Carreras":
                 const verCarreras = document.createElement("div")
                 verCarreras.className="clasecard"
                verCarreras.innerHTML =`
                            <div class="card vercardsje" style="width: 18rem; background-color: black;">
                            <img src="${e.urlPortada}" class="card-img-top" alt="${e.altImagen}">
                            <div class="card-body">
                            <h5 class="card-title">${e.nombre}</h5>
                            <p class="card-text">$${e.precio}</p>
                            <a href="#" class="btn btn-primary" onclick="showProfile('${e.id}')">Conocé mas</a>
                            </div>
                            </div>
                              `;
                catCarreras.append(verCarreras);
             break;
             case "Deportes":
                const verdeportes = document.createElement("div")
                verdeportes.className="clasecard"
                verdeportes.innerHTML =`
                            <div class="card vercardsje" style="width: 18rem; background-color: black;">
                            <img src="${e.urlPortada}" class="card-img-top" alt="${e.altImagen}">
                            <div class="card-body">
                            <h5 class="card-title">${e.nombre}</h5>
                            <p class="card-text">$${e.precio}</p>
                            <a href="#" class="btn btn-primary" onclick="showProfile('${e.id}')">Conocé mas</a>
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
                verSlider.className="classSlider"
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

 const usuariospag = [
    {
        nombre: "Admin",
        contraseña: "Admin"
    },
    {
        nombre: "Test",
        contraseña: "Test"
    }
 ];
  const botonesnav = ()=>{
loginForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const usuario = e.target[0].value;
    const contraseña = e.target[1].value;
            if("Admin" === usuario && "Admin" === contraseña) { 
                AdminGames.style.display = "block";
                AdminUsers.style.display = "block";
                cerrarSecion  .style.display = "block";
                iniciarSecion. style.display = "none";
                AdminRegister. style.display = "none";
                loginForm.reset();
                
                
            } else if(e.usuario === usuario && e.contraseña === contraseña){
                console.log("Iniciaste secion")
            }
        });
        
        $('#ModalNav').modal('hide');
        $('.fade').remove();
        $('body').removeClass('modal-open');
    }
    botonesnav()
