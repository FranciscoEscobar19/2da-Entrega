const apiJuegos = "http://localhost:3000/Juegos"
const catGuerra = document.getElementById ("catGuerra");
const catAventura = document.getElementById("catAventura");
const catCarreras = document.getElementById ("catCarreras");
const catArcades = document.getElementById("catArcade");
const catOtros = document.getElementById("catOtros")
const categorias =[];
const Categorias = ()=> {
    fetch(apiJuegos)
    .then ((response)=>response.json())
    .then (verCat =>{
        verCat.forEach(e=> {
            const nombreCategoria =e.categoria;
        if (!categorias[nombreCategoria]) categorias[nombreCategoria]=[];
            categorias[nombreCategoria].push(e) 
            console.log (nombreCategoria)   
        })
        
        // Categoria Guerra
        const guerra = categorias.Acción;
        guerra.forEach((e)=>{
            const verguerra = document.createElement("div")
      verguerra.className="clasecard"
    verguerra.innerHTML =`
    <div class="card vercardsje" style="width: 18rem;">
  <img src="${e.urlPortada}" class="card-img-top" alt="${e.altImagen}">
  <div class="card-body">
    <h5 class="card-title">${e.nombre}</h5>
    <p class="card-text">$${e.precio}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `;
    catGuerra.append(verguerra)
    });
    // Categoria aventura
    const aventura = categorias.Aventura;
    aventura.forEach((e)=>{ 
        const veraventura = document.createElement("div")
  veraventura.className="clasecard"
veraventura.innerHTML =`
<div class="card vercardsje" style="width: 18rem;">
<img src="${e.urlPortada}" class="card-img-top" alt="${e.altImagen}">
<div class="card-body">
<h5 class="card-title">${e.nombre}</h5>
<p class="card-text">$${e.precio}</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
`;
catAventura.append(veraventura)
});

// Categoria Carreras
const carreras = categorias.Carreras;
carreras.forEach((e)=>{ 
    const verCarreras = document.createElement("div")
verCarreras.className="clasecard"
verCarreras.innerHTML =`
<div class="card vercardsje" style="width: 18rem;">
<img src="${e.urlPortada}" class="card-img-top" alt="${e.altImagen}">
<div class="card-body">
<h5 class="card-title">${e.nombre}</h5>
<p class="card-text">$${e.precio}</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
`;
catCarreras.append(verCarreras)
});

// Categoria Arcades
const arcades = categorias.Arcades;
arcades.forEach((e)=>{ 
    const verArcades = document.createElement("div")
verArcades.className="clasecard"
verArcades.innerHTML =`
<div class="card vercardsje" style="width: 18rem;">
<img src="${e.urlPortada}" class="card-img-top" alt="${e.altImagen}">
<div class="card-body">
<h5 class="card-title">${e.nombre}</h5>
<p class="card-text">$${e.precio}</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
`;
catArcades.append(verArcades)
});

    })
}
Categorias()
