//let parte1="living";
//let parte2="comedor";
//let resultado=(`Trae ${parte1} ${parte2}, en su compra`);



/* uno */
const nombreTres=["Este apartamento de lujo está ubicado en una exclusiva zona recidencial."];
const listaTres= document.querySelector("#directo");
for(direccion of nombreTres){
    listaTres.innerHTML+=`<p>${nombreTres}</p>`
}

/* dos */
let descript=["Este apartamento acogedor está situado en lo alto de una montaña con inpresionantes vistas"];
let desDos=document.querySelector("#des");
for(description of descript){
    desDos.innerHTML+=`<p>${descript}</p>`
}

/* descriptio 3 penhouse */
let penHouse=["Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares"];
let penhouseDos=document.querySelector("#house")
for(housepen of penHouse){
    housepen.innerHTML+=`<p>${penHouse}</p>`
}
/* description 6 */
const nombreDos = ["Este elegante condominio moderno está ubicado en una tranquila la zona residencial"];
const listasDos = document.querySelector("#ele");
for(nombre of nombreDos){
    listasDos.innerHTML+=`<p>${nombreDos}</p>`
}
/* seis */
const nombres= ["-Con baño de visita y Piscina"];
const lista = document.querySelector("#lista")
for(nombre of nombres){
    lista.innerHTML+=`<p>${nombre}</p>`
}
/* cinco */
let yacucci = ["-Baño con Yacucci"];
let bano = document.querySelector("#yacu");
for(banoYa of yacucci){
    bano.innerHTML+=`<p>${yacucci}</p>`
}
/* cuatro */
let banod=["-Sala de Baño completo"];
let salaBanod=document.querySelector("#banod")
for(banod2 of banod){
    salaBanod.innerHTML+=`<p>${banod}</p>`
}

/* botones venta */
const extra=["3 Ventanas o 6 ventanas","hasta agotar stock"];

const lago=["Canoa","Paseo a Caballo","Trekking "]

const pen=["Calefacion"," Sillon Ingles","Clases de ingles"]

/* botones renta */

const masQuincho=["Parrilla"," Terraza"," Quita sol"]

const extraDos=["GIM"," Sala Eventos","Bodega"]

const extras=["Piscina","Cancha de Tenis"]

