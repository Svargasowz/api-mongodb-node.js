import { body } from 'express-validator';

export const validarRegistroClientes = [
    body('identificacion','Por favor digita datos válidos')
        .isNumeric()
        .trim(),
    body('nombres','Por favor digita datos válidos')
    .isString()
    .isLength({ min: 3 })
        .trim(),
    body('direccion','Por favor digita datos válidos')
        .isString(),
    body('telefono','Por favor digita datos válidos')
    .isString()
    .matches(/^\d+$/)
        .trim(),
    body('fecha','Por favor digita datos válidos')
    .isString()
        .trim()
        .notEmpty()
        .matches(/^\d{4}-\d{2}-\d{2}$/),
        body('password','Porfavor dijita datos validos')
        .isString(),
        body('password','el password debe tener como minimo 8 caracteres')
        .isLength({min:8})
        .trim()
];
