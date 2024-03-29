import { body } from 'express-validator'

export const validarRegistroArticulos=[
    body('idarticulo','Porfavor digita datos validos')
    .isNumeric()
    .trim(),
    body('nombre','Porfavor digita datos validos')
    .isString()
    .trim(),
    body('tipo','Porfavor digita datos validos')
    .isString()
    .trim(),
    body('estado','Porfavor digita datos validos')
    .isString()
    .trim()
]