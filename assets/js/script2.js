const masQuincho=["Parrilla"," Terraza"," Quita sol"]

const extra=["GIM"," Sala Eventos","Bodega"]

const extras=["Piscina","Cancha de Tenis"]


/* boton 1 */

document.addEventListener('DOMContentLoaded', () => {
    const uno = document.getElementById('boton');
    let fumarUno = true;

    uno.addEventListener('click', () => {
        if (fumarUno) {
            uno.textContent = 'Se permiten mascotas';
        } else {
            uno.textContent = 'No se permite fumar';
        }
        fumarUno = !fumarUno;
    });
});

/* botones 2 */
document.addEventListener('DOMContentLoaded', () => {
    const condicionBtn = document.getElementById('condicionBtn');
    let fumar = true;

    condicionBtn.addEventListener('click', () => {
        if (fumar) {
            condicionBtn.textContent = 'Se permiten mascotas';
        } else {
            condicionBtn.textContent = 'Se permite fumar';
        }
        fumar = !fumar;
    });
});
/* boton 3 */
document.addEventListener('DOMContentLoaded', () => {
    const dos = document.getElementById('botonTres');
    let fumarDos = true;

    dos.addEventListener('click', () => {
        if (fumarDos) {
            dos.textContent = 'No se permiten mascotas';
        } else {
            dos.textContent = 'No se permite fumar';
        }
        fumarDos = !fumarDos;
    });
});

/////////

/* adicionales uno */ 
const nombreTres=["Cocina amoblada, Baño instalado"];
const listaTres= document.querySelector("#directo");
for(direccion of nombreTres){
    listaTres.innerHTML+=`<p>${nombreTres}</p>`
}

/* dos */
let descript=["Bodega y Gimnacio"];
let desDos=document.querySelector("#des");
for(description of descript){
    desDos.innerHTML+=`<p>${descript}</p>`
}
/* tres */
let yacucci = ["Cocina americana, Sala Multiuso"];
let bano = document.querySelector("#espacio");
for(banoYa of yacucci){
    bano.innerHTML+=`<p>${yacucci}</p>`
}

/* objeto uno arriendo */

const articulo = {
    id:"123 Main Street,Anytown, CA 91234",
    titulo: "2 Habitaciones",
    subtitulo: " 2 ventanas  y 1 puerta",
    descripcion: "2.000 ",
    banos:"2 baños",
    siguenos:"Siguenos en nuestras redes "
   };
   const seccion = document.querySelector('.articulos')
   
   let html = `
<article>
  <p><i class="fas fa-map-marker-alt"></i> ${articulo.id}</p>
  <p><i class="fas fa-bath"></i> ${articulo.titulo}<i class="fas fa-bath"></i>${articulo.banos}</p>
  <p><i class="fa-brands fa-windows"></i>${articulo.subtitulo}</p>
  <p><i class="fas fa-dollar-sign"></i>${articulo.descripcion}</p>
  <p><i class="fa-solid fa-rss"></i>${articulo.siguenos}</p>
</article>

   `;
   seccion.innerHTML = html;

   /* objeto dos arriendo */

   const articuloDos = {
    id:" 456 Ocean Avenue, Seaside Town, CA 56789",
    titulo: "3 Habitaciones",
    subtitulo: " 4 ventanas  y 2 puertas",
    descripcion: "2,500 ",
    banos:"2 baños",
    siguenos:"Siguenos en nuestras redes "
   };
   const seccions = document.querySelector('.articulos2')
   
   let htmlDos = `
<article>
  <p><i class="fas fa-map-marker-alt"></i>${articuloDos.id}</p>
  <p><i class="fas fa-bath"></i> ${articuloDos.titulo}<i class="fas fa-bath"></i>${articuloDos.banos}</p>
  <p><i class="fa-brands fa-windows"></i>${articuloDos.subtitulo}</p>
  <p><i class="fas fa-dollar-sign"></i>${articuloDos.descripcion}</p>
  <p><i class="fa-solid fa-rss"></i>${articuloDos.siguenos}</p>
  
</article>

   `;
   seccions.innerHTML = htmlDos;

    /* objeto dos arriendo */

    const articuloTres = {
        id:"567 Skyline Avenue,Skyview City, CA 56789",
        titulo: "3 Habitaciones",
        subtitulo: " 1 ventanas  y 3 puertas",
        descripcion: "4.500 ",
        banos:"3 baños",
        siguenos:"Siguenos en nuestras redes "
       };
       const seccionx = document.querySelector('.articulos3')
       
       let htmlTres = `
    <article>
      <p><i class="fas fa-map-marker-alt"></i> ${articuloTres.id}</p>
      <p><i class="fas fa-bath"></i> ${articuloTres.titulo}<i class="fas fa-bath"></i>${articuloTres.banos}</p>
      <p><i class="fa-brands fa-windows"></i>${articuloTres.subtitulo}</p>
      <p><i class="fas fa-dollar-sign"></i>${articuloTres.descripcion}</p>
      <p><i class="fa-solid fa-rss"></i>${articuloTres.siguenos}</p
    </article>
    
       `;
       seccionx.innerHTML = htmlTres;


   
