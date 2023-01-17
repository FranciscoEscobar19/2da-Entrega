function contactForm() {
    const d =document;
   const $form=d.querySelector(".contact-form"),
   $inputs=d.querySelectorAll(".contact-form [required]");
   console.log($inputs);
   console.log($form);
 
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
            console.log($input.name);

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
            alert("enviando formulario");
            const $loader=d.querySelector(".contact-form-loader"),
            $response=d.querySelector(".contact-form-response");
            $loader.classList.remove("none");

        fetch("https://formsubmit.co/ajax/rodrigoromano2019@gmail.com",{
            method: "POST",
            body:new FormData(e.target)


        })
        .then(res=>res.ok ? res.json(): Promise.reject(res))
        .then(json=>{
            console.log(json);
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
        },3000));    



        

        });
    };
        document.addEventListener("DOMContentLoaded",contactForm());

   