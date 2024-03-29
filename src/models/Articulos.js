import mongoose from "mongoose";

const articuloSchema=new mongoose.Schema({
    idarticulo:{
        type:Number,
        required:true,
        unique:true
    },
    nombre:{
        type:String,
        required:true
    },
    tipo:{
        type:String,
        enum: ['vehiculo','oro','electrodomestico','maquinaria','herramienta'],
        required:true
    },
    estado:{
        type:String,
        enum: ['activo','desactivado']
    }
})

export const Articulos=mongoose.model('Articulos',articuloSchema)