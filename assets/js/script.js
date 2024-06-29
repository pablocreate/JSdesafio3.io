/* En Venta */
const extra = ["3 Ventanas ", "6 ventanas", "hasta agotar stock"];

const lago = ["Canoa", "Paseo a Caballo", "Trekking "];

const pen = ["Calefacion", " Sillon Ingles", "Clases de ingles"];

/* botones 1 */
let smoke = true;
let pets = true;
if (smoke || pets) {
}

/*botones 2*/
let smokeDos = true;
let petsDos = true;
let resultadoDos = smokeDos || petsDos;

/* botones 2 */
document.addEventListener("DOMContentLoaded", () => {
  const condicionBtn = document.getElementById("condicionBtn");
  let fumar = true;

  condicionBtn.addEventListener("click", () => {
    if (fumar) {
      condicionBtn.textContent = "Se permiten mascotas";
    } else {
      condicionBtn.textContent = "Se permite fumar";
    }
    fumar = !fumar;
  });
});

/* boton 3 */
document.addEventListener("DOMContentLoaded", () => {
  const dos = document.getElementById("botonTres");
  let fumarDos = true;

  dos.addEventListener("click", () => {
    if (fumarDos) {
      dos.textContent = "Se permiten mascotas";
    } else {
      dos.textContent = "No se permite fumar";
    }
    fumarDos = !fumarDos;
  });
});

/* boton 1 */

document.addEventListener("DOMContentLoaded", () => {
  const uno = document.getElementById("boton");
  let fumarUno = true;

  uno.addEventListener("click", () => {
    if (fumarUno) {
      uno.textContent = "No se permiten mascotas";
    } else {
      uno.textContent = "No se permite fumar";
    }
    fumarUno = !fumarUno;
  });
});

/* dos */
let descript = ["-Con trekking a la alta Montaña"];
let desDos = document.querySelector("#des");
for (description of descript) {
  desDos.innerHTML += `<p>${descript}</p>`;
}
/* tres */
let yacucci = ["-Sala de Cine, Gimnacio, Quincho"];
let bano = document.querySelector("#espacio");
for (banoYa of yacucci) {
  bano.innerHTML += `<p>${yacucci}</p>`;
}

/* objeto uno */

const articulo = {
  id: "123 Luxury Lane, Prestige Suburb, CA 45678",
  titulo: "4 Habitaciones",
  subtitulo: " 3 ventanas  y 2 puertas",
  descripcion: "5.000 ",
  banos: "4 baños",
  siguenos: "Siguenos en nuestras redes ",
};
const seccion = document.querySelector(".articulos");

let html = `
<article>
  <p> <i class="fas fa-bed"></i> ${articulo.id}</p>
  <p><i class="fas fa-bath"></i> ${articulo.titulo}<i class="fas fa-bath"></i>${articulo.banos}</p>
  <p><i class="fa-brands fa-windows"></i>${articulo.subtitulo}</p>
  <p><i class="fas fa-dollar-sign"></i>${articulo.descripcion}</p>
  <p><i class="fa-solid fa-rss"></i>${articulo.siguenos}</p>
</article>

   `;
seccion.innerHTML = html;

/* articulo 2 */

const articuloDos = {
  id: " 789 Mountain Road,Summit Peaks, CA 23456",
  titulo: "2 Habitaciones",
  subtitulo: " 4 ventanas  y 2 puertas",
  banos: "1 baños",
  descripcion: "1.200 ",
};
const seccions = document.querySelector(".articulos2");

let htmlDos = `
<article>
  <p><i class="fas fa-bed"></i> ${articuloDos.id}</p>
  <p><i class="fas fa-bath"></i> ${articuloDos.titulo}<i class="fas fa-bath"></i>${articuloDos.banos}</p>
  <p><i class="fas fa-bed"></i>${articuloDos.subtitulo}</p>
  <p><i class="fas fa-dollar-sign"></i>${articuloDos.descripcion}</p>
</article>

   `;
seccions.innerHTML = htmlDos;

/* articulo tres */

const articuloTres = {
  id: "567 Skyline Avenue,Skyview City, CA 56789",
  titulo: "3 Habitaciones ",
  subtitulo: " 1 ventanas  y 3 puertas",
  banos: "3 baños",
  descripcion: "4.500 ",
};
const seccionx = document.querySelector(".articulos3");

let htmlTres = `
<article>
  <p> <i class="fas fa-bed"></i> ${articuloTres.id}</p>
  <p><i class="fas fa-bath"></i> ${articuloTres.titulo}<i class="fas fa-bath"></i>${articuloTres.banos}</p>
  <p><i class="fas fa-bed"></i>${articuloTres.subtitulo}</p>
  <p><i class="fas fa-dollar-sign"></i>${articuloTres.descripcion}</p>
</article>

   `;
seccionx.innerHTML = htmlTres;
