import {datosProductos} from '../datosProductos/dataProduct.js'
import { accesoMapa } from '../helpers/accesoMapaHeader.js';
import { headerVantronic } from '../helpers/headerVantronic.js';

//Pintado del header
headerVantronic()

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
          <div class="card-body d-flex flex-column  justify-content-between">
            <h5 class="card-title">${el.title}</h5>
            <p class="card-text">${el.description}</p>
             ${el.urlExtras && `<a href="${el.urlExtras}" class="btn btn-primary">Ver</a>` }
          </div>
        </div>
        `)

    })

    return console.log(componentes)
}

document.addEventListener('DOMContentLoaded', ()=> {
     getCards()
} )
