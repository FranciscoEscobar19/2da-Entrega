const confirmaciónLogueo =()=>{
    const UsuarioLogueado = localStorage.getItem ('UsuarioLogueado');
    const AdminLogueado = localStorage.getItem ('AdminLogueado');
    if(!UsuarioLogueado && !AdminLogueado) {
        alert("Debes Loguearte para ingresar a este sitio")
        return window.location = '/index.html';
     }
    }
    confirmaciónLogueo()
    
function contactForm() {
    const d =document;
   const $form=d.querySelector(".contact-form"),
   $inputs=d.querySelectorAll(".contact-form [required]");
 
    $inputs.forEach(input=>{
        const $span=d.createElement("span");
        $span.id=input.name;
        $span.textContent=input.title;
        $span.classList.add("contact-form-error","none")
        input.insertAdjacentElement("afterend",$span);

    });

    d.addEventListener("keyup",e=>{

        if(e.target.matches(".contact-form [required]")){
            let $input =e.target,
            
            pattern =$input.pattern || $input.dataset.pattern;

            if(pattern && $input.value !==""){
                let regex=new RegExp(pattern);
                return !regex.exec($input.value)
                ?d.getElementById($input.name).classList.add("is-active")
                :d.getElementById($input.name).classList.remove("is-active")
            }
            if(!pattern){
                return $input.value ===""
                ?d.getElementById($input.name).classList.add("is-active")
                :d.getElementById($input.name).classList.remove("is-active");
            }
        }

    });

        d.addEventListener("submit",e=>{
            e.preventDefault();
            alert("Enviando formulario");
            const $loader=d.querySelector(".contact-form-loader"),
            $response=d.querySelector(".contact-form-response");
            $loader.classList.remove("none");

        fetch("https://formsubmit.co/ajax/escobarefrancisco@gmail.com",{
            method: "POST",
            body:new FormData(e.target)


        })
        .then(res=>res.ok ? res.json(): Promise.reject(res))
        .then(json=>{
            $loader.classList.add("none");
            $response.classList.remove("none");
            $response.innerHTML=`<p>${json.message}</p>`
            $form.reset();

        })
        .catch(err=>{
            console.log(err);
            let message =err.statusText || "Ocurrio un error al enviar";
            $response.innerHTML = ` <p>Error ${err.statusText}: ${message}</p>`;
        })
        .finally(()=>setTimeout(()=>{
            $response.classList.add("none");
            $response.innerHTML="";
        },5000));    



        

        });
    };
        document.addEventListener("DOMContentLoaded",contactForm());

        const navbar=()=>{
            const AdminGames = document.getElementById ("AdminGames");
            const cerrarSecion = document.getElementById ("cerrarSecion");
            const iniciarSecion =document.getElementById ("iniciarSecion");
            const AdminRegister = document.getElementById ("AdminRegister");
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
        }
        navbar()

   