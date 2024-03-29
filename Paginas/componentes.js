import {datosProductos} from '../datosProductos/dataProduct.js'
import { accesoMapa } from '../helpers/accesoMapaHeader.js';


//Acceso a mapa
accesoMapa()

//Pintado de tarjetas
const printComp = document.getElementById('mainCompElec');

const getCards = () => {
    const componentes = datosProductos[0].compoElectric

    componentes.forEach(el => {
        printComp.insertAdjacentHTML('beforeend', 
        `
        
        <div class="card" >
  <img src="${el.img}" class="card-img-top" alt="${el.title}">
  <div class="card-body">
    <h5 class="card-title">${el.title}</h5>
    <p class="card-text">${el.description}</p>
    ${el.urlExtras &&
    `<a href="${el.urlExtras}" class="btn btn-primary">Go somewhere</a>`
    }
  </div>
</div>

        `)
    })

    return console.log(componentes)
}

document.addEventListener('DOMContentLoaded', ()=> {
     getCards()
} )



//Links cards

// const botonConectores = document.getElementById('conectores'); 
// botonConectores.addEventListener('click', () => {
//   const urlConectores = '/Paginas/Conectores/connectors.html'; 
//   window.location.href=urlConectores;
// });
// const botonDiodos = document.getElementById('diodos'); 
// botonDiodos.addEventListener('click', () => {
//   const urlDiodos = '/Paginas/Diodos/diodos.html'; 
//   window.location.href=urlDiodos;
// });
// const botonElectroliticos = document.getElementById('electroliticos'); 
// botonElectroliticos.addEventListener('click', () => {
//   const urlElectroliticos = '/Paginas/electroliticos/electroliticos.html'; 
//   window.location.href=urlElectroliticos;
// });
// const botonLlavesRotativas = document.getElementById('llaves-rotativas'); 
// botonLlavesRotativas.addEventListener('click', () => {
//   const urlLlavesRotativas = '/Paginas/llaves_rotativas/llaves_rotativas.html'; 
//   window.location.href=urlLlavesRotativas;
// });
// const botonNeones = document.getElementById('neones'); 
// botonNeones.addEventListener('click', () => {
//   const urlNeones = '/Paginas/neones-lamparas-leds/neones-lamparas-leds.html'; 
//   window.location.href=urlNeones;
// });
// const botonPerillas = document.getElementById('perillas'); 
// botonPerillas.addEventListener('click', () => {
//   const urlPerillas = '/Paginas/perillas/perillas.html'; 
//   window.location.href=urlPerillas;
// });
// const botonPotenciometros = document.getElementById('potenciometros'); 
// botonPotenciometros.addEventListener('click', () => {
//   const urlPotenciometros = '/Paginas/potenciometros/potenciometros.html'; 
//   window.location.href=urlPotenciometros;
// });
// const botonPulsInt = document.getElementById('puls-int'); 
// botonPulsInt.addEventListener('click', () => {
//   const urlPulsInt = '/Paginas/puls_int/puls_int.html'; 
//   window.location.href=urlPulsInt;
// });
// const botonRelays = document.getElementById('relays'); 
// botonRelays.addEventListener('click', () => {
//   const urlRelays = '/Paginas/relays/relays.html'; 
//   window.location.href=urlRelays;
// });
// const botonResistencias = document.getElementById('resistencias'); 
// botonResistencias.addEventListener('click', () => {
//   const urlResistencias = '/Paginas/resistencias/resistencias.html'; 
//   window.location.href=urlResistencias;
// });
// const botonZocalos = document.getElementById('zocalos'); 
// botonZocalos.addEventListener('click', () => {
//   const urlZocalos= '/Paginas/zocalos/zocalos.html'; 
//   window.location.href=urlZocalos;
// });
// const botonCapacitores = document.getElementById('capacitores'); 
// botonCapacitores.addEventListener('click', () => {
//   const urlCapacitores= '/Paginas/capacitores/capacitores.html'; 
//   window.location.href=urlCapacitores;
// });

