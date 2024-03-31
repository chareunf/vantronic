import { accesoMapa } from './accesoMapaHeader.js'
import { headerVantronic } from './headerVantronic.js'
// refDom => (string) Es el id de referencia en el Dom dondque quiero que pinte las cards
//refData => (string) Es la referencia en la base de datos para que me filtre solo el array correspondiente
//dataArray => Son los datos completos


export const filtroPintadoCards = (refDom, refData, dataArray) => {
    const datosProductos = dataArray
    const contenedorPrinc = document.getElementById(refDom)
    const conectores = datosProductos[0].compoElectric.filter(el => el.title === (refData))
    
    
    const getComponetsSection = () => {
        
        conectores[0].articles.forEach((el) => {
            const arrElem = el.allArt
            const refDom = document.getElementById(`${el.article}`)

            arrElem.forEach(all => {
                refDom.insertAdjacentHTML('beforeend',
                    `
                    <div class="card">
                        <img src="${all.img}" class="card-img-top" alt="${all.title}">
                        <div class="card-body">
                            <h5 class="card-title">${all.title}</h5>
                            <p class="card-text"></p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${all.p1}</li>
                            <li class="list-group-item">${all.p2}</li>
                            <li class="list-group-item">${all.p3}</li>
                            <li class="list-group-item"> 
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Ampliar imagen
                                </button>
                            </li>
                                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="staticBackdropLabel">${all.title}</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <img src="${all.img}" class="card-img-top" alt="${all.title}">
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                        </ul>
                    </div> `
                 )
            })
             
        })
      
    }

    const getComponents = () => {


        conectores[0].articles.forEach((el) => {
            contenedorPrinc.insertAdjacentHTML('beforeend',
                `
    <h3 class="conectoresTitles">${el.article}</h3>
    <div id=${el.article} class="mainCardContainer ">
    </div>
    `
            )


        })

    }

    //Se renderiza en todas las paginas menos en el index,y en las paginas
   //  principales de nautica y componentes electronicos en las cuales se importa el header en cada js.

    document.addEventListener('DOMContentLoaded', () => {
        headerVantronic()
        getComponents()
        getComponetsSection()
        accesoMapa()
    })


}