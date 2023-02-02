
const apiJuegos = "http://localhost:3000/Juegos"
const catGuerra = document.getElementById ("catGuerra");
const catAventura = document.getElementById("catAventura");
const catCarreras = document.getElementById ("catCarreras");
const catDeportes = document.getElementById("catDeportes");
const idSlider = document.getElementById ("idSlider")
const loginForm = document.getElementById ("loginForm");
const loginAdmin = document.getElementById ("loginAdmin");
const AdminGames = document.getElementById ("AdminGames");
const cerrarSecion = document.getElementById ("cerrarSecion");
const iniciarSecion =document.getElementById ("iniciarSecion");
const AdminRegister = document.getElementById ("AdminRegister");
const registerForm = document.getElementById ("registerForm");
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
                <div class="card vercardsje " style="width: 18rem; background-color: black;">
                <img src="${e.urlPortada}" class="card-img-top" alt="${e.altImagen}">
                <div class="card-body">
                <h5 class="card-title">${e.nombre}</h5>
                <h4 class="card-text d-flex ">$${e.precio}<a id="tamañoBoton" class="m-1 color-3 btn ms-5" onclick="showProfile('${e.id}')">Conocé mas</a></h4>
                
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
                        <h4 class="card-text d-flex ">$${e.precio}<a id="tamañoBoton" class="m-1 color-3 btn  ms-5" onclick="showProfile('${e.id}')">Conocé mas</a></h4>
                        
                        </div>
                        </div>
                        `;
                catAventura.append(veraventura)
             break;
            case "Carreras":
                 const verCarreras = document.createElement("div")
                 verCarreras.className="clasecard"
                verCarreras.innerHTML =`
                <div class="card vercardsje " style="width: 18rem; background-color: black;">
                <img src="${e.urlPortada}" class="card-img-top" alt="${e.altImagen}">
                <div class="card-body">
                <h5 class="card-title">${e.nombre}</h5>
                
                <h4 class="card-text d-flex ">$${e.precio}<a id="tamañoBoton" class="m-1 btn ms-5" onclick="showProfile('${e.id}')">Conocé mas</a></h4>
                
                </div>
                </div>
                `;
                catCarreras.append(verCarreras);
             break;
             case "Deportes":
                const verdeportes = document.createElement("div")
                verdeportes.className="clasecard"
                verdeportes.innerHTML =`
                <div class="card vercardsje " style="width: 18rem; background-color: black;">
                <img src="${e.urlPortada}" class="card-img-top" alt="${e.altImagen}">
                <div class="card-body">
                <h5 class="card-title">${e.nombre}</h5>
                <h4 class="card-text d-flex ">$${e.precio}<a id="tamañoBoton"  class="m-1 btn  ms-5" onclick="showProfile('${e.id}')">Conocé mas</a></h4>
                
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
// --------------------------------------------------------------Slider--------------------------------------------------------------------------------
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
                    <div class="carousel-caption d-none d-md-block colorLetraSlider d-flex  justify-content-center ">
                      <h1 class="">${e.nombre}</h1>
                      <h2 >${e.categoria}</h2>
                      <p " >${e.descripción}</p>
                      <a  class="btn btn-primary " onclick="showProfile('${e.id}')">Ver Mas</a>
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
// --------------------------------------------------------------Redireccion Detalle---------------------------------------------------------------------------------
const showProfile = (id)=>{
    window.location =`../HTML/DetallesDeJuego.html#${id}`;
}
// --------------------------------------------------------------REGISTRO---------------------------------------------------------------------------------

 const registroUsers =()=>{
     registerForm.addEventListener("submit", (e)=>{
         e.preventDefault();
         const userPlayer = {
             nombre: e.target[0].value,
             Email: e.target[1].value,
             usuario: e.target[2].value,
             contraseña: e.target[3].value,
         };
         const UsuarioStorage = JSON.parse(localStorage.getItem('Usuarios')) || [];
         UsuarioStorage.push(userPlayer);
         localStorage.setItem('Usuarios', JSON.stringify(UsuarioStorage));
         registerForm.reset() ;
         $('#exampleModal').modal('hide');
     })
 }
 registroUsers()

// --------------------------------------------------------------LOGIN---------------------------------------------------------------------------------
  const botonesnav = ()=>{
loginForm.addEventListener("submit",(e)=>{
    const UsuarioStorage = JSON.parse(localStorage.getItem('Usuarios'))
    const UsuarioLogueado= UsuarioStorage.find((Usuarios=>
            Usuarios.usuario === e.target[0].value && Usuarios.contraseña === e.target[1].value
        ));
         if(!UsuarioLogueado){ return alert("Nombre o contraseña incorrecta")
    }else{
         localStorage.setItem('UsuarioLogueado', JSON.stringify(UsuarioLogueado));
                ;
                loginForm.reset();
                $('#ModalNav').modal('hide')
            }
    })
    
}        
    botonesnav()

    const myFunction =()=>{
        $("#modalAdmin").modal("show");
       }
       
       const botonesNavAdmin = ()=>{
        loginAdmin.addEventListener("submit",(e)=>{
            const AdminStorage = JSON.parse(localStorage.getItem('Usuarios'))
            const AdminLogueado= AdminStorage.find((Usuarios=>
                    Usuarios.usuario === e.target[0].value && Usuarios.contraseña === e.target[1].value && e.target[0].value === "AdminSecret"
                ));
                 if(!AdminLogueado){ return alert("Nombre o contraseña incorrecta")
            }else{
                 localStorage.setItem('AdminLogueado', JSON.stringify(AdminLogueado));
                        loginForm.reset();
                        
                        $('#modalAdmin').modal('hide')
                        window.location.reload()
                        $('#ModalNav').modal('hide')
                    }
                    
            })
            
        } 
        botonesNavAdmin()

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


   

        
     