        //nombre,precio,categoria,cantidad(desarrollador).favorito

        const d=document,
        $table=d.querySelector(".crud-table"),
        $form=d.querySelector(".crud-form"),
        $title=d.querySelector(".crud-title"),
        $template=d.getElementById("crud-template").content,
        $fragment=d.createDocumentFragment();
        const confirmaciónLogueo =()=>{
            const AdminLogueado = localStorage.getItem ('AdminLogueado');
            if(!AdminLogueado) {
                alert("Debes Loguearte para ingresar a este sitio")
                return window.location = '/index.html';
             }
        }
        confirmaciónLogueo()

        const getAll=async()=>{
          try {
            let res= await fetch(" http://localhost:3000/Juegos/");
            let json = await res.json();
            if(!res.ok) throw {status:res.status,statusText:res.statusText};
            console.log(json);
            json.forEach(el => {
                $template.querySelector(".name").textContent=el.nombre;
                $template.querySelector(".precio").textContent=el.precio;
                $template.querySelector(".categoria").textContent=el.categoria;
                $template.querySelector(".desarrollador").textContent=el.desarrollador;
                $template.querySelector(".Favorito").textContent=el.Favorito;
                $template.querySelector(".edit").dataset.id=el.id;
                $template.querySelector(".edit").dataset.name=el.nombre;
                $template.querySelector(".edit").dataset.categoria=el.categoria;
                $template.querySelector(".edit").dataset.precio=el.precio;
                $template.querySelector(".edit").dataset.urlVideo=el["urlVideo"];
                $template.querySelector(".edit").dataset.urlPortada=el["urlPortada"];
                $template.querySelector(".edit").dataset.altImagen=el.altImagen;
                $template.querySelector(".edit").dataset.urlImagen1=el["urlImagen1"];
                $template.querySelector(".edit").dataset.urlImagen2=el["urlImagen2"];
                $template.querySelector(".edit").dataset.urlImagen3=el["urlImagen3"];
                $template.querySelector(".edit").dataset.urlImagen4=el["urlImagen4"];
                $template.querySelector(".edit").dataset.descripción=el.descripción;
                $template.querySelector(".edit").dataset.desarrollador=el.desarrollador;
                $template.querySelector(".edit").dataset.fechaLanzamiento=el.fechaLanzamiento;
                $template.querySelector(".edit").dataset.Favorito=el.Favorito;
                $template.querySelector(".delete").dataset.id=el.id;
                $template.querySelector(".delete").dataset.id=el.nombre;

                let $clone=d.importNode($template,true);
                $fragment.appendChild($clone);
    
            });
            $table.querySelector("tbody").appendChild($fragment);

            
            
        } catch (error) {
            let message =err.statusText || "ocurrio un error";
            $table.insertAdjacentHTML("afterend",`<p><b>${err.status}:${message}</b></p>`);
          }  
        };

        d.addEventListener("DOMContentLoaded",getAll);

        d.addEventListener("submit",async e=>{
            if(e.target===$form){
                e.preventDefault();
                if(!e.target.id.value){
                    try {
                        let option={
                            method:"POST",
                            headers:{
                                "Content-type":"application/json;charset=utf-8",
                            },
                            body:JSON.stringify({
                                nombre:e.target.nombre.value,
                                precio:e.target.precio.value,
                                Favorito:e.target.Favorito.value,
                                ["urlVideo"]:e.target.urlVideo.value,
                                ["urlPortada"]:e.target.urlPortada.value,
                                altImagen:e.target.altImagen.value,
                                ["urlImagen1"]:e.target.urlImagen1.value,
                                ["urlImagen2"]:e.target.urlImagen2.value,
                                ["urlImagen3"]:e.target.urlImagen3.value,
                                ["urlImagen4"]:e.target.urlImagen4.value,
                                descripción:e.target.descripción.value,
                                desarrollador:e.target.desarrollador.value,
                                fechaLanzamiento:e.target.fechaLanzamiento.value,
                                categoria:e.target.categoria.value,

                            })
                        }
                        let res =await fetch("http://localhost:3000/Juegos",option);
                        let json=await res.json();
                        if(!res.ok) throw {status:res.status,statusText:res.statusText};
                        location.reload();
                        
                    } catch (error) {
                        let message =err.statusText || "ocurrio un error";
                        $form.insertAdjacentHTML("afterend",`<p><b>${err.status}:${message}</b></p>`);
                    }
                }else{
                    try {
                        let option={
                            method:"PUT",
                            headers:{
                                "Content-type":"application/json;charset=utf-8",
                            },
                            body:JSON.stringify({
                                nombre:e.target.nombre.value,
                                precio:e.target.precio.value,
                                Favorito:e.target.Favorito.value,
                                ["urlVideo"]:e.target.urlVideo.value,
                                ["urlPortada"]:e.target.urlPortada.value,
                                altImagen:e.target.altImagen.value,
                                ["urlImagen1"]:e.target.urlImagen1.value,
                                ["urlImagen2"]:e.target.urlImagen2.value,
                                ["urlImagen3"]:e.target.urlImagen3.value,
                                ["urlImagen4"]:e.target.urlImagen4.value,
                                descripción:e.target.descripción.value,
                                desarrollador:e.target.desarrollador.value,
                                fechaLanzamiento:e.target.fechaLanzamiento.value,
                                categoria:e.target.categoria.value

                            })
                            
                        }
                        let res=await fetch(`http://localhost:3000/Juegos/${e.target.id.value}`,option);
                        let json=await res.json();
                        location.reload();

                    } catch (error) {
                          
                        let message =err.statusText || "ocurrio un error";
                         $form.insertAdjacentHTML("afterend",`<p><b>${err.status}:${message}</b></p>`);
                    }
                }
            }

        });

        d.addEventListener("click",async e=>{
            if(e.target.matches(".edit")){
                $title.textContent="Editar Juego";
                $form.nombre.value=e.target.dataset.name;
                $form.precio.value=e.target.dataset.precio;
                $form.Favorito.value=e.target.dataset.Favorito;
                $form.urlVideo.value=e.target.dataset.urlVideo;
                $form.urlPortada.value=e.target.dataset.urlPortada;
                $form.altImagen.value=e.target.dataset.altImagen;
                $form.urlImagen1.value=e.target.dataset.urlImagen1;
                $form.urlImagen2.value=e.target.dataset.urlImagen2;
                $form.urlImagen3.value=e.target.dataset.urlImagen3;
                $form.urlImagen4.value=e.target.dataset.urlImagen4;
                $form.descripción.value=e.target.dataset.descripción;
                $form.desarrollador.value=e.target.dataset.desarrollador;
                $form.fechaLanzamiento.value=e.target.dataset.fechaLanzamiento;
                $form.categoria.value=e.target.dataset.categoria;
                $form.Favorito.value=e.target.dataset.Favorito;
                $form.id.value=e.target.dataset.id;
            }
            if(e.target.matches(".delete")){
                alert("presionaste el boton eliminar");
                let isDelete=confirm(`estas seguro q quieres eliminar`+e.target.dataset.nombre);
                if(isDelete){
                    try {
                        let option={
                            method:"DELETE",
                            header:{
                                "Content-type":"application/json;charset=utf-8"
                            }
                        }
                        let res=await fetch(`http://localhost:3000/Juegos/${e.target.dataset.value}`,option);
                        let json= await res.json();

                        if(!res.ok) throw {status:res.status, statusText:res.statusText};
                        location.reload();

                    } catch (error) {
                          
                let message =err.statusText || "ocurrio un error";
                $table.insertAdjacentHTML("afterend",`<p><b>${err.status}:${message}</b></p>`);
                    }
                }
            }


        });
        

        
        
        
