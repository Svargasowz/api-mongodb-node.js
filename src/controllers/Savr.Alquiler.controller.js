import { Alquiler } from "../models/Alquiler.js";

export const registrarAlquiler=async(req,res)=>{
    const {idalquiler,valor,fecha,meses,descripcion,intereses,cliente,articulo}=req.body
     try{
         //ALTERNATIVA BUSCARDP POR IDENTIFICACION
         let alquiler=await Alquiler.findOne({idalquiler})
         if(alquiler) throw {code:11000}//esto hace que la solicitud salte al catch y no se siga ejecutando el proyecto
 
         alquiler=new Alquiler({idalquiler,valor,fecha,meses,descripcion,intereses,cliente,articulo})
         await alquiler.save()
 
         return res.status(201).json({message:'alquiler registrado con exito'})
     }catch(error){
         console.log(error.code)
         //ALTERNATIVA POR DEFECTO
         if(error.code===11000){
             return res.status(400).json({error:"Ya existe un usuario con ese id"})
         }
         return res.status(500).json({error:"Error de servidor"})
     }
 }
 export const listarAlquiler=async(req,res)=>{
    try{

        const respuesta=await Alquiler.find({})

        if (respuesta.length > 0) {
            res.status(200).json(respuesta);
        } else {
            res.status(404).json({
                message: 'No se encontraron Alquileres'
            });
        }
    }catch(error){
        res.status(500).json({
            message: 'Error en el sistema: ' + error
        });
    }
}
export const buscarAlquiler = async (req, res) => {
    try {
        const idalquiler = req.params.idalquiler;
        const respuesta = await Alquiler.findById(idalquiler);

        if (!respuesta) {
            res.status(404).json({
                message: 'No encontramos al cliente con ese _id'
            });
        } else {
            res.status(200).json(respuesta);
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error en el sistema: ' + error
        });
    }
};
export const eliminarAlquiler = async (req, res) => {
    try {
        const idalquiler = req.params.idalquiler;
        const respuesta = await Alquiler.deleteOne({ _id: idalquiler });

        if (respuesta.deletedCount >0) {
            return res.status(200).json({
                message: 'alquiler eliminado con éxito'
            });
        } else {
            return res.status(404).json({
                message: 'No se encontró al alquiler con esa identificación'
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Error en el sistema: ' + error
        });
    }
};
