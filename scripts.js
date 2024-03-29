
import {accesoMapa} from './helpers/accesoMapaHeader.js'

accesoMapa()


const botonCE = document.getElementById('componentes-p-b'); 
botonCE.addEventListener('click', () => {
  const urlCE= '/Paginas/componentes_electronicos.html'; 
  window.location.href=urlCE;
});









