import mongoose from "mongoose";
import { Alquiler } from "./Alquiler.js"; 

const interesesSchema = new mongoose.Schema({
    idinteres: {
        type: Number,
        required: true,
        unique: true
    },
    mes: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    alquiler: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Alquiler,
        required: true
    },
    estado:{
        type:String,
        enum: ['fue pagado','sin pagar'],
        required: true
    }
});

export const Intereses = mongoose.model('Intereses', interesesSchema);
