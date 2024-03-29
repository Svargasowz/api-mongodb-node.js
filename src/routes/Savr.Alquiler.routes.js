import { Router } from "express";
import { registrarAlquiler,listarAlquiler,buscarAlquiler,eliminarAlquiler } from "../controllers/Savr.Alquiler.controller.js";
import { validationResultExpress } from "../middlewares/Savr.validationExpress.js";
import { validarToken } from "../utils/Savr.generarToken.js";
import { validarRegistroAlquiler } from "../middlewares/Savr.validationAlquiler.js";

const routerAlquiler=Router()

routerAlquiler.post("/registrar",validarToken,validationResultExpress,validarRegistroAlquiler,registrarAlquiler)
routerAlquiler.get("/listar",validarToken,validationResultExpress,listarAlquiler)
routerAlquiler.get("/buscar/:idalquiler",validarToken,validationResultExpress,buscarAlquiler)
routerAlquiler.delete("/eliminar/:idalquiler",validarToken,validationResultExpress,eliminarAlquiler)
export default routerAlquiler