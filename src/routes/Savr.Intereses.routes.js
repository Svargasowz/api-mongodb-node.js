import { Router } from "express";
import { registrarIntereses,listarIntereses,buscarIntereses,eliminarIntereses,actualizarInteresess } from "../controllers/Savr.Intereses.controller.js";
import { validationResultExpress } from "../middlewares/Savr.validationExpress.js";
import { validarToken } from "../utils/Savr.generarToken.js";
import { validarRegistroIntereses } from "../middlewares/Savr.validationIntereses.js";


const routerIntereses=Router()
routerIntereses.post("/registrar",validarToken,validationResultExpress,validarRegistroIntereses,registrarIntereses)
routerIntereses.delete("/eliminar/:idinteres",validarToken,validationResultExpress,eliminarIntereses)
routerIntereses.get("/listar",validarToken,validationResultExpress,listarIntereses)
routerIntereses.get("/buscar/:idinteres",validarToken,validationResultExpress,buscarIntereses)
routerIntereses.put("/actualizar/:idinteres",validarToken,validationResultExpress,actualizarInteresess)

export default routerIntereses;