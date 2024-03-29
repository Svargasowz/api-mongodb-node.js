import { body } from 'express-validator';


export const validarLoginClientes=[
    body('identificacion','Porfavor dijita datos validos')
    .isNumeric()
    .trim(),
    body('password','Porfavor dijita datos validos')
    .isString(),
    body('password','el password debe tener como minimo 8 caracteres')
    .isLength({min:8})
    .trim()
    ]