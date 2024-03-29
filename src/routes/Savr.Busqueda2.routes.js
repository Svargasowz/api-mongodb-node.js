import { Router } from "express";
import { interesesRecaudados } from "../controllers/Savr.Busqueda2Controller.js";;
import { validarToken } from "../utils/Savr.generarToken.js";
const rutaBusqueda2 = Router();

rutaBusqueda2.get("/busqueda2/:fecha",validarToken,interesesRecaudados);
export default rutaBusqueda2;