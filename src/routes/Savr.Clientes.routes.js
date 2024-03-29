import {Router} from 'express'
import { registrarClientes,listarClientes,buscarClientes,actualizarClientes,eliminarClientes } from '../controllers/Savr.Clientes.controller.js'
import { validationResultExpress } from '../middlewares/Savr.validationExpress.js'
import { validarRegistroClientes} from '../middlewares/Savr.validationClientes.js'
import { validarToken } from '../utils/Savr.generarToken.js'
const routerCliente= Router()

routerCliente.post("/registrar",validationResultExpress,validarRegistroClientes,registrarClientes)
routerCliente.get("/listar",validarToken,validationResultExpress,listarClientes)
routerCliente.get("/buscar/:identificacion",validarToken,validationResultExpress,buscarClientes)
routerCliente.put("/actualizar/:identificacion",validarToken,validationResultExpress,validarRegistroClientes,actualizarClientes)
routerCliente.delete("/eliminar/:identificacion",validarToken,validationResultExpress,eliminarClientes)

export default routerCliente