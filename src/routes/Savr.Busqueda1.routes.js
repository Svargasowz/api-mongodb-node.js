// En tu archivo de rutas (por ejemplo, routes.js)
import Router from 'express';
import { listarInteresesPagados } from '../controllers/Savr.Busqueda1Controller.js';
import { validarToken } from '../utils/Savr.generarToken.js';


const rutaBusqueda1 = Router();

// Define la ruta para listar intereses pagados
rutaBusqueda1.get('/busqueda/:identificacion',validarToken,listarInteresesPagados);

export default rutaBusqueda1;
