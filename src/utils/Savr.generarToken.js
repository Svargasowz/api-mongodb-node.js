import { Clientes } from "../models/Clientes.js"
import jwt  from "jsonwebtoken"

export const loginToken=async(req,res)=>{
    
    try{
        const {identificacion,password}=req.body
        
        let clientes = await Clientes.findOne({identificacion})
        if(!clientes) return res.status(403).json({error:"No existe un usuario con ese id"})

        const respuestaPassword=await clientes.comparePassword(password)
        if(!respuestaPassword){
            return res.status(404).json({error:'Contraseña incorrecta 😭'})
        }
        //GENERAR EL TOKEN
        let token=jwt.sign({uid:clientes._id}, process.env.JWT_SECRET,{expiresIn:process.env.AUT_EXPIRE})
        
        return res.json({token})
    }catch(error){
        console.log(error)
        return res.status(500).json({error:"Error de servidor"})
    }
}

export const validarToken=async(req,res,next)=>{
    try {
        
        let tokenClient = req.headers['token']

        if(!tokenClient){
            return res.status(403).json({'message': 'Token es requerido'})
        }else{
            const token = jwt.verify(tokenClient, process.env.JWT_SECRET, (error, decoded) => {
                if(error){
                    return res.status(403).json({message: 'Token es obligatorio'})
                }else{
                    next()
                }
            })
        }
    } catch (error) {
        return res.status(500).json({status: 500, message: 'Error del servidor' + error})
    }
}