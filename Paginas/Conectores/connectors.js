import { accesoMapa } from '../../helpers/accesoMapaHeader.js'
import { datosProductos } from '../../datosProductos/dataProduct.js'
import { filtroPintadoCards } from '../../helpers/filtroPintadoCards.js'

accesoMapa()
filtroPintadoCards('mainConectores','Conectores',datosProductos)

// const contenedorPrinc = document.getElementById('mainConectores')
// const conectores = datosProductos[0].compoElectric.filter(el => el.title === "Conectores")

// const getComponetsSection = () => {



//     conectores[0].articles.forEach((el) => {
//         const arrElem = el.allArt
//         const refDom = document.getElementById(`${el.article}`)

//         arrElem.forEach(all => {
//             refDom.insertAdjacentHTML('beforeend',
//                 `
//         <div class="card">
//             <img src="${all.img}" class="card-img-top" alt="${all.title}">
//             <div class="card-body">
//                 <h5 class="card-title">${all.title}</h5>
//                 <p class="card-text"></p>
//             </div>
//             <ul class="list-group list-group-flush">
//                 <li class="list-group-item">${all.p1}</li>
//                 <li class="list-group-item">${all.p2}</li>
//                 <li class="list-group-item">${all.p3}</li>
//             </ul>
//          </div>
//     `
//             )
//         })

//     })

// }

// const getComponents = () => {


//     conectores[0].articles.forEach((el) => {
//         contenedorPrinc.insertAdjacentHTML('beforeend',
//             `
//     <h3 class="conectoresTitles">${el.article}</h3>
//     <div id=${el.article} class="mainCardContainer ">
//     </div>
//     `
//         )


//     })

// }

// document.addEventListener('DOMContentLoaded', () => {
//     getComponents()
//     getComponetsSection()
// })