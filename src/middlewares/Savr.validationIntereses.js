import { body } from 'express-validator'

export const validarRegistroIntereses=[
    body('idinteres','Porfavor dijita datos validos')
    .isNumeric()
    .trim(),
    body('mes','Porfavor digita datos validos')
    .isNumeric()
    .trim(),
    body('fecha','Porfavor digita datos validos')
    .isString()
    .trim()
    .notEmpty()
    .matches(/^\d{4}-\d{2}-\d{2}$/),
    body('valor','Porfavor digita datos validos')
    .isNumeric()
    .trim(),
    body('alquiler','Porfavor digita datos validos')
    .isString()
    .trim(),
    body('estado','Porfavor digita datos validos')
    .isString()
    .trim()
];