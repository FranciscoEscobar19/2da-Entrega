const apiUsuarios = "http://localhost:3000/Usuarios"; 
const loginForm = document.getElementById ("loginForm");
const AdminUsers = document.getElementById ("AdminUsers");
 


    loginForm.addEventListener("submit",(e)=>{
        e.preventDefault()
        const usuario = e.target[0].value;
        const contraseña = e.target[1].value;
        fetch(apiUsuarios)
        .then ((response)=>response.json())
        .then (loginUsuarios=>{
            loginUsuarios.forEach((e) => {
                if("Admin" === usuario && "Admin" === contraseña) {
                    AdminUsers.style.display ="block";
                } else if(e.usuario === usuario && e.contraseña === contraseña){
                    console.log("Iniciaste secion")
                }
                
            
                
            });
    })
});
