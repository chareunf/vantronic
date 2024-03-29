
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
            </ul>
         </div>
    `
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

    document.addEventListener('DOMContentLoaded', () => {
        getComponents()
        getComponetsSection()
    })


}