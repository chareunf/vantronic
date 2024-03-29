export const accesoMapa = () => {
const botonGmaps = document.getElementById('fa-solid'); 
return botonGmaps.addEventListener('click', () => {
  const urlGmaps = 'https://maps.app.goo.gl/XApyccaTXuLdDZui9'; 
  window.open(urlGmaps, '_blank');
});
}