import { accesoMapa } from '../../helpers/accesoMapaHeader.js'
import { datosProductos } from '../../datosProductos/dataProduct.js'
import { filtroPintadoCards } from '../../helpers/filtroPintadoCards.js'

accesoMapa()
filtroPintadoCards('mainPotenciometros','Potenciometros-De-Carbon',datosProductos)