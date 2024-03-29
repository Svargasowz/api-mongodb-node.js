import { body } from 'express-validator'

export const validarBusquedaDos=[
    body('fecha','Porfavor digita datos validos')
    .isEmpty()
    .isString()
]