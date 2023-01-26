        //nombre,precio,categoria,cantidad(desarrollador).favorito

        const d=document,
        $table=d.querySelector(".crud-table"),
        $form=d.querySelector(".crud-form"),
        $title=d.querySelector(".crud-title"),
        $template=d.getElementById("crud-template").content,
        $fragment=d.createDocumentFragment();
        console.log($title);
        console.log($form);
        console.log($table);
        console.log($template);
        console.log($fragment);

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
                $template.querySelector(".edit").dataset.urlImagen=el["urlImagen 1"];
                $template.querySelector(".edit").dataset.desarrollador=el.desarrollador;
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
                                ["urlImagen 1"]:e.target.urlImagen.value,
                                desarrollador:e.target.desarrollador.value,
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
                                ["urlImagen 1"]:e.target.urlImagen.value,
                                desarrollador:e.target.desarrollador.value,
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
                $title.textContent="editar Empresa";
                $form.nombre.value=e.target.dataset.name;
                $form.precio.value=e.target.dataset.precio;
                $form.urlImagen.value=e.target.dataset.urlImagen;
                $form.desarrollador.value=e.target.dataset.desarrollador;
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

        
        
        
