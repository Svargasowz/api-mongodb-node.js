import Router from 'express'
import { PendientesPorPagar } from '../controllers/Savr.Busqueda3Controller.js'
import { validarToken } from '../utils/Savr.generarToken.js'

const rutaBusqueda3=Router()

rutaBusqueda3.get("/busqueda3/:idinteres",validarToken,PendientesPorPagar)

export default rutaBusqueda3;