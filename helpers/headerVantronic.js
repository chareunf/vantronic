export const headerVantronic = () => {
   // const headerDom = document.getElementById('headerId');
    const headerDom = document.querySelector('header');
    const footerDom = document.querySelector('footer');

    headerDom.insertAdjacentHTML('beforeend', `

    <nav class="navbar navbar-expand-lg  fixed-top ">
    <div class="container-fluid ">
      <a class="navbar-brand" href="/">Vantronic S.A</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Inicio</a>
          </li>
          
          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle " href="/Paginas/componentes_electronicos.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Componentes Eelec.
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/Paginas/componentes_electronicos.html">Componentes Elect.</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="/Paginas/Conectores/connectors.html">Conectores</a></li>
              <li><a class="dropdown-item" href="/Paginas/Diodos/diodos.html">Diodos</a></li>
              <li><a class="dropdown-item" href="/Paginas/electroliticos/electroliticos.html">Electroliticos</a></li>
              <li><a class="dropdown-item" href="/Paginas/llaves_rotativas/llaves_rotativas.html">Llaves Rotativas</a></li>
              <li><a class="dropdown-item" href="/Paginas/neones-lamparas-leds/neones-lamparas-leds.html">Neones Lamparas y Leds</a></li>
              <li><a class="dropdown-item" href="/Paginas/perillas/perillas.html">Perillas</a></li>
              <li><a class="dropdown-item" href="/Paginas/potenciometros/potenciometros.html">Potenciometros De Carbón</a></li>
              <li><a class="dropdown-item" href="/Paginas/presets/presets.html">Preset ACP MEC</a></li>
              <li><a class="dropdown-item" href="/Paginas/puls_int/puls_int.html">Pulsadores Interruptores</a></li>
              <li><a class="dropdown-item" href="/Paginas/relays/relays.html">Relay</a></li>
              <li><a class="dropdown-item" href="/Paginas/resistencias/resistencias.html">Resistencias</a></li>
              <li><a class="dropdown-item" href="/Paginas/zocalos/zocalos.html">Zócalos</a></li>
              <li><a class="dropdown-item" href="/Paginas/capacitores/capacitores.html">Capacitores</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Náutica
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/Paginas/nautica/nautica.html">Náutica</a></li>
              <li><hr class="dropdown-divider"></li>
              
              <li><a class="dropdown-item" href="#">Próximamente</a></li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/Paginas/Contacto/contacto.html">Contactos</a>
          </li>
          
        </ul>
        <div class="d-flex icons " >
            <i id="fa-solid" class="fa-solid fa-map-location-dot"><br></i>
        </div>
      </div>
    </div>
  </nav>
    
    `)


    footerDom.insertAdjacentHTML('beforeend', `
        <div class="footer-wrap">

            <div>
                <h4><i class="fa-solid fa-at"></i> ventas@vantronic-sa.com.ar</h4>
            </div>
            <div>
                <h4><i class="fa-brands fa-whatsapp"></i> 11-3566-0113</h4>
            </div>
            <div>
                <h4><i class="fa-solid fa-phone"></i> 4-750-0702</h4>
            </div>
        </div>
    
    `)

   
}