import { Intereses } from "../models/Intereses.js";


export const registrarIntereses=async(req,res)=>{
    const{idinteres,mes,fecha,valor,alquiler,estado}=req.body
    try{

    let intereses=await Intereses.findOne({idinteres})
    if(intereses) throw {code:11000}
    
    intereses=new Intereses({idinteres,mes,fecha,valor,alquiler,estado})
    await intereses.save()

    return res.status(201).json({message:'Intereses registrados correctamente'})

    }catch(error){
    console.log(error.code)
    if(error.code===11000){
        return res.status(400).json({message:"Ya existe un alquiler con ese id"})
    }
    return res.status(500).json({message:"Error de servidor"+error})
}
}
export const eliminarIntereses = async (req, res) => {
    try {
        const idinteres = req.params.idinteres;
        const respuesta = await Intereses.deleteOne({ _id: idinteres });

        if (respuesta.deletedCount >0) {
            return res.status(200).json({
                message: 'intereses eliminado con éxito'
            });
        } else {
            return res.status(404).json({
                message: 'No se encontró al intereses con esa identificación'
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Error en el sistema: ' + error
        });
    }
};
export const listarIntereses=async(req,res)=>{
    try{

        const respuesta=await Intereses.find({})

        if (respuesta.length > 0) {
            res.status(200).json(respuesta);
        } else {
            res.status(404).json({
                message: 'No se encontraron ningun interes'
            });
        }
    }catch(error){
        res.status(500).json({
            message: 'Error en el sistema: ' + error
        });
    }
}
export const buscarIntereses = async (req, res) => {
    try {
        const idinteres = req.params.idinteres;
        const respuesta = await Intereses.findById(idinteres);

        if (!respuesta) {
            res.status(404).json({
                message: 'No encontramos al interes con ese _id'
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
export const actualizarInteresess = async (req, res) => {
    try {
        const body = req.body;
        const idinteres = req.params.idinteres;
        
        const respuesta = await Intereses.findOneAndUpdate({ _id: idinteres }, body);

        if (!respuesta) {
            res.status(404).json({
                message: 'No se encontró un intereses con ese identificación'
            });
        } else {
            res.status(200).json({
                message:'datos del intereses actualizados con exito'
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error en el sistema: ' + error
        });
    }
};
