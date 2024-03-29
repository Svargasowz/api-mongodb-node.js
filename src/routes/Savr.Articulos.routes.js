import { Router } from "express";
import { listarArticulos,registrarArticuloss,actualizarArticulos,desactivarArticulos,buscarArticulos } from "../controllers/Savr.Articulos.controller.js";
import { validationResultExpress } from "../middlewares/Savr.validationExpress.js";
import { validarRegistroArticulos } from "../middlewares/Savr.validationArticulos.js";
import { validarToken } from "../utils/Savr.generarToken.js";

const routerArticulo=Router()

routerArticulo.post("/registrar",validarToken,validationResultExpress,validarRegistroArticulos,registrarArticuloss)
routerArticulo.get("/listar",validarToken,validationResultExpress,listarArticulos)
routerArticulo.get("/buscar/:idarticulo",validarToken,validationResultExpress,buscarArticulos)
routerArticulo.put("/actualizar/:idarticulo",validarToken,validationResultExpress,validarRegistroArticulos,actualizarArticulos)
routerArticulo.put("/desactivar/:idarticulo",validarToken,validationResultExpress,desactivarArticulos)

export default routerArticulo
