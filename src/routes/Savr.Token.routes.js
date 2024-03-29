import { Router } from "express";
import { validationResultExpress } from "../middlewares/Savr.validationExpress.js";
import { validarLoginClientes } from "../middlewares/Savr.validationToken.js";
import { loginToken } from "../utils/Savr.generarToken.js";

const routerToken=Router()

routerToken.post("/login",validationResultExpress,validarLoginClientes,loginToken)

export default routerToken;