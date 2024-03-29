import { body } from "express-validator";

export const validarRegistroAlquiler=[
    body('idalquiler','Porfavor coloca datos validos')
    .isNumeric()
    .trim(),
    body('valor','Porfavor digita datos validos')
    .isNumeric()
    .trim(),
    body('fecha','Porfavor digita datos validos')
    .isString()
    .trim()
    .notEmpty()
    .matches(/^\d{4}-\d{2}-\d{2}$/),
    body('meses','Porfavor digita datos validos')
    .isNumeric()
    .trim(),
    body('descripcion','Porfavor digita datos validos')
    .isString()
    .trim(),
    body('intereses','Porfavor digita datos validos')
    .isNumeric()
    .trim(),
    body('cliente','Porfavor digita datos validos')
    .isString()
    .trim(),
    body('articulo','Porfavor digita datos validos')
    .isString()
    .trim() 
]