import mongoose from "mongoose";
import { Clientes } from "./Clientes.js"; 
import { Articulos } from "./Articulos.js"; 

const alquilerSchema = new mongoose.Schema({
    idalquiler: {
        type: Number,
        required: true,
        unique: true
    },
    valor: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    meses: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    intereses: {
        type: Number,
        required: true
    },
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Clientes, //esto es para hacer referencia al modelo Cliente
        required: true
    },
    articulo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Articulos, //esto es para hacer referencia al modelo Articulo
        required: true
    }
});

export const Alquiler = mongoose.model('Alquiler', alquilerSchema);
