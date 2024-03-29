import { Articulos } from "../models/Articulos.js"


export const registrarArticuloss=async(req,res)=>{
    const {idarticulo,nombre,tipo,estado}=req.body
     try{
         //ALTERNATIVA BUSCARDP POR IDENTIFICACION
         let articulos=await Articulos.findOne({idarticulo})
         if(articulos) throw {code:11000}//esto hace que la solicitud salte al catch y no se siga ejecutando el proyecto
 
         articulos=new Articulos({idarticulo,nombre,tipo,estado})
         await articulos.save()
 
 
         return res.status(201).json({message:'articulo registrado con exito'})
     }catch(error){
         console.log(error.code)
         //ALTERNATIVA POR DEFECTO
         if(error.code===11000){
             return res.status(400).json({error:"Ya existe un articulo con ese id"})
         }
         return res.status(500).json({error:"Error de servidor"})
     }
 }
 export const desactivarArticulos = async (req, res) => {
    try {
        const idarticulo = req.params.idarticulo;
        
        const respuesta = await Articulos.findByIdAndUpdate(idarticulo, { estado: 'desactivado' });

        if (respuesta) {
            return res.status(200).json({
                message: 'Artículo desactivado con éxito'
            });
        } else {
            return res.status(404).json({
                message: 'No se encontró el artículo con esa identificación'
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Error en el sistema: ' + error
        });
    }
};

export const listarArticulos=async(req,res)=>{
    try{

        const respuesta=await Articulos.find({})

        if (respuesta.length > 0) {
            res.status(200).json(respuesta);
        } else {
            res.status(404).json({
                message: 'No se encontraron articulos'
            });
        }
    }catch(error){
        res.status(500).json({
            message: 'Error en el sistema: ' + error
        });
    }
}
export const buscarArticulos = async (req, res) => {
    try {
        const idarticulo = req.params.idarticulo;
        const respuesta = await Articulos.findById(idarticulo);

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
export const actualizarArticulos = async (req, res) => {
    try {
        const body = req.body;
        const idarticulo = req.params.idarticulo;
        
        const respuesta = await Articulos.findOneAndUpdate({ _id: idarticulo }, body);

        if (!respuesta) {
            res.status(404).json({
                message: 'No se encontró el articulo con esa identificación'
            });
        } else {
            res.status(200).json({
                message:'los datos del articulo fueron actualizados con exito'
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error en el sistema: ' + error
        });
    }
};
