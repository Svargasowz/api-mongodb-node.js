import { Router } from "express";
import { procesarPago } from "../controllers/Savr.PagarInteresesController.js";

const routerPagos = Router();

routerPagos.put('/pagar/:idinteres', procesarPago);

export default routerPagos;