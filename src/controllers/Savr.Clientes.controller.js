import { Clientes } from "../models/Clientes.js"

export const registrarClientes=async(req,res)=>{
   const {identificacion,nombres,direccion,telefono,fecha,password}=req.body
    try{
        //ALTERNATIVA BUSCARDP POR IDENTIFICACION
        let clientes=await Clientes.findOne({identificacion})
        if(clientes) throw {code:11000}//esto hace que la solicitud salte al catch y no se siga ejecutando el proyecto

        clientes=new Clientes({identificacion,nombres,direccion,telefono,fecha,password})
        await clientes.save()


        return res.status(201).json({message:'cliente registrado con exito'})
    }catch(error){
        console.log(error.code)
        //ALTERNATIVA POR DEFECTO
        if(error.code===11000){
            return res.status(400).json({message:"Ya existe un usuario con ese id"})
        }
        return res.status(500).json({message:"Error de servidor"+error})
    }
}

export const listarClientes=async(req,res)=>{
    try{

        const respuesta=await Clientes.find({})

        if (respuesta.length > 0) {
            res.status(200).json(respuesta);
        } else {
            res.status(404).json({
                message: 'No se encontraron clientes'
            });
        }
    }catch(error){
        res.status(500).json({
            message: 'Error en el sistema: ' + error
        });
    }
}
export const buscarClientes = async (req, res) => {
    try {
        const identificacion = req.params.identificacion;
        const respuesta = await Clientes.findById(identificacion);

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

export const actualizarClientes = async (req, res) => {
    try {
        const body = req.body;
        const identificacion = req.params.identificacion;
        
        const respuesta = await Clientes.findOneAndUpdate({ _id: identificacion }, body);

        if (!respuesta) {
            res.status(404).json({
                message: 'No se encontró al cliente con esa identificación'
            });
        } else {
            res.status(200).json({
                message:'los datos del cliente fueron actualizados con exito'
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error en el sistema: ' + error
        });
    }
};

export const eliminarClientes = async (req, res) => {
    try {
        const identificacion = req.params.identificacion;
        const respuesta = await Clientes.deleteOne({ _id: identificacion });

        if (respuesta.deletedCount >0) {
            return res.status(200).json({
                message: 'Cliente eliminado con éxito'
            });
        } else {
            return res.status(404).json({
                message: 'No se encontró al cliente con esa identificación'
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Error en el sistema: ' + error
        });
    }
};
