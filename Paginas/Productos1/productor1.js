const botonCE = document.getElementById('componentes-p'); 
botonCE.addEventListener('click', () => {
  const urlCE= '/Paginas/componentes_electronicos.html'; 
  window.location.href=urlCE;
});

const botonGmaps = document.getElementById('fa-solid'); 
botonGmaps.addEventListener('click', () => {
  const urlGmaps = 'https://maps.app.goo.gl/XApyccaTXuLdDZui9'; 
  window.open(urlGmaps, '_blank');
});