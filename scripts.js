import { headerVantronic } from './helpers/headerVantronic.js';
import {accesoMapa} from './helpers/accesoMapaHeader.js'

headerVantronic()
accesoMapa()

const botonCE = document.getElementById('componentes-p-b'); 
botonCE.addEventListener('click', () => {
  const urlCE= '/Paginas/componentes_electronicos.html'; 
  window.location.href=urlCE;
});

const botonNautica = document.getElementById('componentes-p-n'); 
botonNautica.addEventListener('click', () => {
  const urlNautica= '/Paginas/nautica/nautica.html'; 
  window.location.href=urlNautica;
});








